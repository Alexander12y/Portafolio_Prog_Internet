<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>e en PHP</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form method="post">
        <label for="n">Límite superior n:</label>
        <input type="number" name="n" id="n" min="0" required>
        <button type="submit">Calcular e</button>
    </form>

    <?php
    function factorial($n) {
        if ($n <= 1) return 1;
        return $n * factorial($n - 1);
    }

    function aproximar_e_tabla($n) {
        $e = 0;
        echo '<table border="1" cellpadding="3"><tr><th>n</th><th>x</th></tr>';
        for ($k = 0; $k <= $n; $k++) {
            $e += 1 / factorial($k);
            echo "<tr><td>$k</td><td>$e</td></tr>";
        }
        echo '</table>';
        return $e;
    }

    if (isset($_POST['n'])) {
        $n = (int)$_POST['n'];
        echo "<br>";
        $resultado = aproximar_e_tabla($n);
        echo "<p>Valor aproximado de e con $n iteraciones: <strong>$resultado</strong></p>";
    }
    ?>
</body>
</html>
