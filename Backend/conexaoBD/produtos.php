<?php

    require_once "db_connect.php";

    $result = query("SELECT * FROM allbikes02.produto JOIN valores ON 
    produto.id_produto = valores.id_valores;");
    $produtos = [];

    while($row = mysqli_fetch_assoc($result)){
        $produtos[] = $row;
    }

    header("Access-Control-Allow-Origin:*");
    echo json_encode($produtos);



    /*
    $result = query("SELECT * FROM produtos");
    $produtos = [];

    while($row = mysqli_fetch_assoc($result)){
        $produtos[] = $row;
    }

    header("Access-Control-Allow-Origin:*");
    echo json_encode($produtos);
    */
?>
