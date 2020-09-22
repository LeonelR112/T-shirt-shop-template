<?php

    class InicioController{

        public function __construct()
        {
            
        }

        public function inicio(){
            require_once "./templates/header.php";
            require_once "./views/home/inicio.php";
            require_once "./templates/footer.php";
        }

    }

?>