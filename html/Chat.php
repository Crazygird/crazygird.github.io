<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Chat</title>
    </head>
    <body>
        <form action="Chat.php" method="post">
            <input type="text" name="Text">
            <input type="submit">
        </form>

        <?php

            $prevSend;

            while(true) {    

                $wFile = fopen("Messages.txt", "w") or die("Unable to open file!");
                $text = $_POST["Text"];
                if ($text != $prevSend) {

                    fwrite($wFile, $text);
                    $prevSend = $text;
                    

                }

                fclose($wFile);


                $myfile = fopen("Messages.txt", "r") or die("Unable to open file!");
                echo fread($myfile,filesize("Messages.txt"));
                fclose($myfile);

            }
        ?>
    </body>
</html>