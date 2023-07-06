import { toast } from 'react-toastify'
export default class ToastUtils {
  static showSuccessToast = (msg) => {
    toast.success(msg, {
      position: 'top-center',
      hideProgressBar: true,
      newestOnTop: true,
      toastId: msg,
      // closeOnClick: true,
      // pauseOnFocusLoss: true,
      // draggable: true,
      // pauseOnHover: true,
    })
  }

  static showErrorToast = (msg) => {
    toast.error(msg, {
      position: 'top-center',
      hideProgressBar: true,
      newestOnTop: true,
      toastId: msg,
    })
  }
  static showInfoToast = (msg) => {
    toast.info(msg, {
      position: 'top-center',
      hideProgressBar: true,
      newestOnTop: true,
      toastId: msg,
    })
  }
}
