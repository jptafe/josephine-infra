<?php

    class sqsModel {

        private $dbconn;

        public function __construct() {
            $dbURI = 'mysql:host=' . $_ENV['HOST'] . ';port=3306;dbname=' . $_ENV['DBASE'];
            $this->dbconn = new PDO($dbURI, $_ENV['USER'], $_ENV['PASS']);
            $this->dbconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
    }
?>
