<?php

require_once("SimpleRest.php");
require_once("Site.php");

class SiteRestHandler extends SimpleRest
{
    public function getTitle()
    {
        $site = new Site();
        $rawData = $site -> getTitle();

        if ($rawData) {
            $statusCode = 200;
        } else {
            $statusCode = 401;
            $rawData = array( 'error' => 'No no no!' );
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

    public function updateTitle($account, $password, $title)
    {
        $site = new Site();
        $rawData = $site -> updateTitle($account, $password, $title);

        if ($rawData) {
            $statusCode = 200;
        } else {
            $statusCode = 401;
            $rawData = array( 'error' => 'No no no!' );
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
