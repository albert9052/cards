<?php

require_once("CardRestHandler.php");
require_once("UserRestHandler.php");
require_once("SiteRestHandler.php");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['user'])) {
        $user = $_GET['user'];
        switch ($user) {
        case 'information':
            $userRestHandler = new UserRestHandler();
            $userRestHandler -> getInformation();
            break;
        case 'verifyJWT':
            $userRestHandler = new UserRestHandler();
            $userRestHandler -> verifyJWT();
            break;
        default:
            $userRestHandler = new UserRestHandler();
            $userRestHandler -> notFound();
            break;
        }
    }

    if (isset($_GET['card'])) {
        $card = $_GET['card'];
        switch ($card) {
        case 'all':
            $cardRestHandler = new CardRestHandler();
            $cardRestHandler -> getAllCards();
            break;
        case 'my':
            $cardRestHandler = new CardRestHandler();
            $cardRestHandler -> getMyCards();
            break;
        case 'single':
            $cardRestHandler = new CardRestHandler();
            $cardRestHandler -> getCard($_GET['cardID']);
            break;
        default:
            $cardRestHandler = new CardRestHandler();
            $cardRestHandler -> notFound();
            break;
        }
    }

    if (isset($_GET['site'])) {
        $site = $_GET['site'];
        switch ($site) {
        case 'title':
            $siteRestHandler = new SiteRestHandler();
            $siteRestHandler -> getTitle();
            break;
        default:
            $siteRestHandler = new SiteRestHandler();
            $siteRestHandler -> notFound();
            break;
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['user'])) {
        $user = $data['user'];
        $userRestHandler = new UserRestHandler();
        switch ($user) {
        case 'signUp':
            $userRestHandler -> signUp($data['username'], $data['password']);
            break;
        case 'signIn':
            $userRestHandler -> signIn($data['username'], $data['password']);
            break;
        case 'signInAsAdmin':
            $userRestHandler -> signInAsAdmin($data['account'], $data['password']);
            break;
        case 'signOut':
            $userRestHandler -> signOut();
            break;
        case 'uploadAvatarURL':
            $userRestHandler -> updateAvatarViaURL($data['avatarURL']);
            break;
        default:
            $userRestHandler -> notFound();
            break;
        }
    }

    if (isset($data['card'])) {
        $card = $data['card'];
        $cardRestHandler = new CardRestHandler();
        switch ($card) {
        case 'downloadAttachment':
            $cardRestHandler -> downloadAttachment($data['cardID']);
            break;
        default:
            $cardRestHandler -> notFound();
            break;
        }
    }

    if (isset($data['site'])) {
        $site = $data['site'];
        $siteRestHandler = new SiteRestHandler();
        switch ($site) {
        case 'updateTitle':
            $siteRestHandler -> updateTitle($data['account'], $data['password'], $data['title']);
            break;
        default:
            $siteRestHandler -> notFound();
            break;
        }
    }

    if (isset($_POST['user'])) {
        $userRestHandler = new UserRestHandler();
        if ($_POST['user'] === 'avatar') {
            $userRestHandler -> updateAvatarViaFile($_FILES['avatar']);
        } else {
            $userRestHandler -> notFound();
        }
    }

    if (isset($_POST['card'])) {
        $cardRestHandler = new CardRestHandler();
        if ($_POST['card'] === 'new') {
            $cardRestHandler -> addCard($_POST['content'], isset($_FILES['attachment']) ? $_FILES['attachment'] : null);
        } else {
            $cardRestHandler -> notFound();
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['card'])) {
        $card = $data['card'];
        $cardRestHandler = new CardRestHandler();
        switch ($card) {
        case 'delete':
            $cardRestHandler -> deleteCard($data['cardID']);
            break;
        default:
            $cardRestHandler -> notFound();
            break;
        }
    }
}
