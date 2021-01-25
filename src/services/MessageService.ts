import toastr from "toastr";

class MessageService {
  success(message: any, title?: string, optionsOverride?: any) {
    toastr.success(
      message,
      title || "",
      optionsOverride || {
        closeButton: true,
        newestOnTop: true,
        positionClass: "toast-top-right",
        showDuration: "5000",
      }
    );
  }
  warning(message: string, title?: string, optionsOverride?: any) {
    toastr.warning(
      message,
      title || "",
      optionsOverride || {
        closeButton: true,
        newestOnTop: true,
        positionClass: "toast-top-right",
        showDuration: "5000",
      }
    );
  }
  error(message: any, title?: string, optionsOverride?: any) {
    toastr.error(
      message,
      title || "",
      optionsOverride || {
        closeButton: true,
        newestOnTop: true,
        positionClass: "toast-top-right",
        showDuration: "5000",
      }
    );
  }
}

export const messageService = new MessageService();
