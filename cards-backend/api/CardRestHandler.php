<?php

require_once("SimpleRest.php");
require_once("Card.php");

class CardRestHandler extends SimpleRest
{
    public function getAllCards()
    {
        $card = new Card();
        $rawData = $card -> getAllCards();

        if (empty($rawData)) {
            $statusCode = 404 ;
            $rawData = array( 'error' => 'No cards found!' );
        } else {
            $statusCode = 200 ;
        }

        $requestContentType = $_SERVER [ 'HTTP_ACCEPT' ];
        $this -> setHttpHeaders($requestContentType, $statusCode);

        if (strpos($requestContentType, 'application/json') !== false) {
            $response = $this -> encodeJson($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'text/html') !== false) {
            $response = $this -> encodeHtml($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'application/xml') !== false) {
            $response = $this -> encodeXml($rawData);
            echo $response ;
        }
    }

    public function getMyCards()
    {
        $card = new Card();
        $rawData = $card -> getMyCards();

        if (empty($rawData)) {
            $statusCode = 404 ;
            $rawData = array( 'error' => 'No cards found!' );
        } else {
            $statusCode = 200 ;
        }

        $requestContentType = $_SERVER [ 'HTTP_ACCEPT' ];
        $this -> setHttpHeaders($requestContentType, $statusCode);

        if (strpos($requestContentType, 'application/json') !== false) {
            $response = $this -> encodeJson($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'text/html') !== false) {
            $response = $this -> encodeHtml($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'application/xml') !== false) {
            $response = $this -> encodeXml($rawData);
            echo $response ;
        }
    }

    public function getCard($cardID)
    {
        $card = new Card();
        $rawData = $card -> getCard($cardID);

        if (empty($rawData)) {
            $statusCode= 404;
            $rawData = array( 'error' => 'Card not found!' );
        } else {
            $statusCode = 200;
        }

        $requestContentType = $_SERVER['HTTP_ACCEPT'];
        $this->setHttpHeaders($requestContentType, $statusCode);

        if (strpos($requestContentType, 'application/json') !== false) {
            $response = $this -> encodeJson($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'text/html') !== false) {
            $response = $this -> encodeHtml($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'application/xml') !== false) {
            $response = $this -> encodeXml($rawData);
            echo $response ;
        }
    }

    public function addCard($content, $attachment)
    {
        $rawData = array();
        require_once('JWT.php');
        $jwtHandler = new JWTHandler();
        $jwt = $_COOKIE['jwt'];
        $data = json_decode($jwtHandler->is_jwt_valid($jwt), true);
        if (empty($data)) {
            $statusCode = 401;
            $rawData = array( 'error' => 'No signing in!' );
        } else {
            $card = new Card();
            $rawData = $card -> addCard($content, $attachment);
            if ($rawData) {
                $statusCode = 200;
            } else {
                $statusCode = 400;
                $rawData = array( 'error' => 'Too Large!' );
            }
        }

        $requestContentType = $_SERVER['HTTP_ACCEPT'];
        $this->setHttpHeaders($requestContentType, $statusCode);

        if (strpos($requestContentType, 'application/json') !== false) {
            $response = $this -> encodeJson($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'text/html') !== false) {
            $response = $this -> encodeHtml($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'application/xml') !== false) {
            $response = $this -> encodeXml($rawData);
            echo $response ;
        }
    }

    public function deleteCard($cardID)
    {
        $rawData = array();
        require_once('JWT.php');
        $jwtHandler = new JWTHandler();
        $jwt = $_COOKIE['jwt'];
        $data = json_decode($jwtHandler->is_jwt_valid($jwt), true);
        if (empty($data)) {
            $statusCode = 401;
            $rawData = array( 'error' => 'No signing in!' );
        } else {
            $card = new Card();
            $rawData = $card -> deleteCard($cardID);
            if ($rawData) {
                $statusCode = 200;
            } else {
                $statusCode = 404;
                $rawData = array( 'error' => 'The Card didn\'t exist!' );
            }
        }

        $requestContentType = $_SERVER['HTTP_ACCEPT'];
        $this->setHttpHeaders($requestContentType, $statusCode);

        if (strpos($requestContentType, 'application/json') !== false) {
            $response = $this -> encodeJson($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'text/html') !== false) {
            $response = $this -> encodeHtml($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'application/xml') !== false) {
            $response = $this -> encodeXml($rawData);
            echo $response ;
        }
    }

    public function downloadAttachment($cardID)
    {
        $card = new Card();
        $rawData = $card -> downloadAttachment($cardID);
        if ($rawData) {
            $statusCode = 200;
        } else {
            $statusCode = 404;
            $rawData = array( 'error' => 'The Card didn\'t exist!' );
        }
        //$requestContentType = $_SERVER['HTTP_ACCEPT'];
        //$this->setHttpHeaders($requestContentType, $statusCode);
        $this->setHttpHeadersForDownloadingFile($statusCode, $rawData);
        ob_clean();
        flush();

        readFile($rawData);
        exit;
    }

    public function notFound()
    {
        $statusCode = 404;
        $rawData = 'Not found!';

        $requestContentType = $_SERVER['HTTP_ACCEPT'];
        $this -> setHttpHeaders($requestContentType, $statusCode);

        if (strpos($requestContentType, 'application/json') !== false) {
            $response = $this -> encodeJson($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'text/html') !== false) {
            $response = $this -> encodeHtml($rawData);
            echo $response ;
        } elseif (strpos($requestContentType, 'application/xml') !== false) {
            $response = $this -> encodeXml($rawData);
            echo $response ;
        }
    }

    public function encodeHtml($responseData)
    {
        $htmlResponse = "<table border='1'>" ;
        foreach ($responseData as $key => $value) {
            $htmlResponse .= "<tr><td>" . $key . "</td><td>" . $value . "</td></tr>" ;
        }
        $htmlResponse .= "</table>" ;
        return $htmlResponse ;
    }

    public function encodeJson($responseData)
    {
        $jsonResponse = json_encode($responseData);
        return $jsonResponse ;
    }

    public function encodeXml($responseData)
    {
        //創建SimpleXMLElement對象
        $xml = new SimpleXMLElement('<?xml version="1.0"?><site></site>');
        foreach ($responseData as $key => $value) {
            $xml -> addChild($key, $value);
        }
        return $xml -> asXML();
    }
}
