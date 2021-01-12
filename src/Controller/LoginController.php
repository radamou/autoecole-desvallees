<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LoginController extends AbstractController
{
     /** @Route("/login") */
    public function __invoke(): Response
    {
        return $this->render('Account/login.html.twig');
    }
}