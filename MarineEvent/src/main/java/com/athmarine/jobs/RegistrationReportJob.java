package com.athmarine.jobs;

import com.athmarine.entity.EventRegistrationEntity;
import com.athmarine.repository.EventRegistrationDao;
import com.athmarine.service.EmailService;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

@Component
public class RegistrationReportJob {

    private final Logger log = LoggerFactory.getLogger(RegistrationReportJob.class);

    private XSSFWorkbook workbook;
    private XSSFSheet sheet;
    @Autowired
    private EventRegistrationDao eventRegistrationDao;

    @Autowired
    private EmailService emailService;

    @Value("${admin.email}")
    private String adminEmail;

    @Scheduled(cron = "${cron.registrationReport}")
    public void sendRegistrationReport() throws IOException {
        System.out.println("Executing registration report job");
        try {
            workbook = new XSSFWorkbook();
            sheet = workbook.createSheet("Report");
            writeHeader();
            writeData();

            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            try {
                workbook.write(bos);
            } finally {
                bos.close();
            }
            byte[] excelFileAsBytes = bos.toByteArray();

            StringBuilder builder = new StringBuilder("Hi, ")
                    .append("<br/><br/>")
                    .append("Please find the event registration report.")
                    .append("<br/><br/>").append("Thanks");
            emailService.sendEmail(adminEmail, "Seminar Attendee List", builder.toString(), excelFileAsBytes);
        } catch (Exception e) {
            log.error("Exception occurred in report job: ", e);
        } finally {
            workbook.close();
        }
        log.info("Report job executed");
    }

    private void writeHeader() {
        Row row = sheet.createRow(0);
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setBold(true);
        font.setFontHeight(16);
        style.setFont(font);
        createCell(row, 0, "Name", style);
        createCell(row, 1, "Company's Name", style);
        createCell(row, 2, "Email ID", style);
        createCell(row, 3, "Mobile No. ", style);
        createCell(row, 4, "Name on Cap", style);
        createCell(row, 5, "Presentation", style);
        createCell(row, 6, "Drinks", style);
        createCell(row, 7, "Dinner", style);
    }

    private void createCell(Row row, int columnCount, Object valueOfCell, CellStyle style) {
        sheet.autoSizeColumn(columnCount);
        Cell cell = row.createCell(columnCount);
        if (valueOfCell instanceof Integer) {
            cell.setCellValue((Integer) valueOfCell);
        } else if (valueOfCell instanceof Long) {
            cell.setCellValue((Long) valueOfCell);
        } else if (valueOfCell instanceof String) {
            cell.setCellValue((String) valueOfCell);
        } else {
            cell.setCellValue((Boolean) valueOfCell);
        }
        cell.setCellStyle(style);
    }

    private void writeData() {
        int rowCount = 1;
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setFontHeight(14);
        style.setFont(font);
        List<EventRegistrationEntity> eventRegistrationEntityList = eventRegistrationDao.findAll();
        for (EventRegistrationEntity eventRegistrationEntity : eventRegistrationEntityList) {
            Row row = sheet.createRow(rowCount++);
            int columnCount = 0;
            createCell(row, columnCount++, eventRegistrationEntity.getName(), style);
            createCell(row, columnCount++, eventRegistrationEntity.getCompanyName(), style);
            createCell(row, columnCount++, eventRegistrationEntity.getEmail(), style);
            createCell(row, columnCount++, eventRegistrationEntity.getMobileNumber(), style);
            createCell(row, columnCount++, eventRegistrationEntity.getNameOnCap(), style);
            createCell(row, columnCount++, eventRegistrationEntity.isPresentation() ? "Yes" : "Not Attending", style);
            createCell(row, columnCount++, eventRegistrationEntity.isCocktail() ? "Yes" : "Not Attending", style);
            createCell(row, columnCount++, eventRegistrationEntity.getDinner() , style);

        }
    }

}
