<?php

require_once("SimpleRest.php");
require_once("User.php");

class UserRestHandler extends SimpleRest
{
    public function signUp($username, $password)
    {
        $user = new User();
        $rawData = $user -> signUp($username, $password);

        if ($rawData) {
            $statusCode = 200;
        } else {
            $statusCode = 409;
            $rawData = array( 'error' => 'Username is taken!' );
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

    public function updateAvatarViaFile($avatar)
    {
        $user = new User();
        $rawData = $user -> updateAvatarFile($avatar);

        if ($rawData) {
            $statusCode = 200;
        } else {
            $statusCode = 401;
            $rawData = array( 'error' => 'Updating avatar failed' );
        }

        $requestContentType = $_SERVER [ 'HTTP_ACCEPT' ];
        $this -> setHttpHeaders($requestContentType, $statusCode);
    }

    public function updateAvatarViaURL($avatar)
    {
        $user = new User();
        $rawData = $user -> updateAvatarURL($avatar);

        if ($rawData) {
            $statusCode = 200;
        } else {
            $statusCode = 401;
            $rawData = array( 'error' => 'Updating avatar failed' );
        }

        $requestContentType = $_SERVER [ 'HTTP_ACCEPT' ];
        $this -> setHttpHeaders($requestContentType, $statusCode);
    }

    public function signIn($username, $password)
    {
        $user = new User();
        $rawData = $user -> signIn($username, $password);

        if ($rawData) {
            $statusCode = 200;
        } else {
            $statusCode = 401;
            $rawData = array( 'error' => 'No user found!' );
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

    public function signInAsAdmin($account, $password)
    {
        $user = new User();
        $rawData = $user -> signInAsAdmin($account, $password);

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

    public function verifyJWT()
    {
        $user = new User();
        $rawData = $user ->verifyJWT();

        if ($rawData) {
            $statusCode = 200;
        } else {
            $statusCode = 401;
            $rawData = array( 'error' => 'Please sign in again' );
        }

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

    public function getInformation()
    {
        $user = new User();
        $rawData = $user -> getInformation();

        if ($rawData) {
            $statusCode = 200;
        } else {
            $statusCode = 401;
            $rawData = array( 'error' => 'Please sign in again. ' );
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

    public function signOut()
    {
        $user = new User();
        $user -> signOut();
        $statusCode = 200;

        $requestContentType = $_SERVER['HTTP_ACCEPT'];
        $this -> setHttpHeaders($requestContentType, $statusCode);
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
