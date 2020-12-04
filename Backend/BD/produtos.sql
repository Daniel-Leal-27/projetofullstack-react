-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: allbikes02
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id_produto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  `imagem` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'Bicicleta','Trek - Aro 16 - Cor laranja','Produto_01.webp'),(2,'Bicicleta','Dropp Z3 - Aro 29 - Com 21 marchas','Produto_02.jpg'),(3,'Bicicleta','Feel - Aro 26 - Com 21 marchars','Produto_03.jpg'),(4,'Bicicleta','Groove - Aro 29 - Com 21 marchas','Produto_04.jpg'),(5,'Bicicleta','Ksw - Aro 29 - Com 24 marchas','Produto_05.jpg'),(6,'Bicicleta','Woltz - Aro 29 - Com 21 marchas','Produto_06.jpg'),(7,'Bicicleta','Power - Aro 26 - Com 18 marchas','Produto_07.webp'),(8,'Bicicleta','Caloi Strada 2017 - SPEED - Com 16 marchas','Produto_08.webp'),(9,'Bicicleta','Caloi TR-10s - SPEED - Com 16 marchas','Produto_09.webp'),(10,'Capacete','tipo:passeio - Tamanho P a G','Produto_10.jpg'),(11,'Capacete','tipo:ciclismo - Tamanho P a G','Produto_11.webp'),(12,'Luz','Frontal + Cronômetro (resistente à agua)','Produto_12.jpg'),(13,'Luz','traseira de LED','Produto_13 - dar erro.webp'),(14,'Buzina','WG','Produto_14.jpg'),(15,'Buzina','Ar bike','Produto_15.webp'),(16,'Teste','Teste','Produto_15.webp');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-03 14:51:15
