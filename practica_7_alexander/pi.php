<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>PI en PHP</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form method="post">
        <label for="n">Límite superior n:</label>
        <input type="number" name="n" id="n" min="1" required>
        <button type="submit">Calcular π</button>
    </form>

    <?php
    function aproximar_pi_tabla($n) {
        $pi = 0;
        echo '<table border="1" cellpadding="3"><tr><th>n</th><th>x</th></tr>';
        for ($k = 1; $k <= $n; $k++) {
            $pi += pow(-1, $k-1) / (2 * ($k-1) + 1);
            $aprox = 4 * $pi;
            echo "<tr><td>$k</td><td>$aprox</td></tr>";
        }
        echo '</table>';
        return $aprox;
    }

    if (isset($_POST['n'])) {
        $n = (int)$_POST['n'];
        echo "<br>";
        $resultado = aproximar_pi_tabla($n);
        echo "<p>Valor aproximado de π con $n iteraciones: <strong>$resultado</strong></p>";
    }
    ?>
</body>
</html>
