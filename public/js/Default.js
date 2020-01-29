function OpenSwalLoading(title, desc) {
  window.swal({
    title: title,
    html: desc,
    allowOutsideClick: false,
    onOpen: () => {
      swal.showLoading();
      //stillLoading();
    },
    onClose: () => {
      endLoading();
    }
  });
}
