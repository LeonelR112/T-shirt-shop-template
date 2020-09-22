<?php
    //var_dump($_GET['controller']);

    if(!isset($_GET['controller'])){
        require_once "./controller/home/inicio.php";
        $controller = new InicioController();
        call_user_func(array($controller, 'inicio'));

    }else{

    }

?>