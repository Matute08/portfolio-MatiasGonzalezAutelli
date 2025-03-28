

import Swal from 'sweetalert2';

export const notificacionMail = (titulo: string) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: titulo,
        showConfirmButton: false,
        timer: 1500
          }).then(() => {
        window.location.reload();
          });
};

export const notificacionError = (titulo: string) => {
    Swal.fire({
        position: "center",
        icon: "error",
        title: titulo,
        showConfirmButton: false,
        timer: 1000
          });
};
  
