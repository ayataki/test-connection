(function() {
  let checkStatus = () => {
    if (navigator.onLine) {
      document.getElementById("javascript").innerHTML = "<i class=\"fa fa-circle text-success\" aria-hidden=\"true\"></i> Online";
    } else {
      document.getElementById("javascript").innerHTML = "<i class=\"fa fa-circle text-danger\" aria-hidden=\"true\"></i> Offline";
    }
  };

  window.addEventListener("online", function () {
    checkStatus ();
  });

  window.addEventListener("offline", function () {
    checkStatus ();
  });
})();