<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
     /** @Route("/") */
    public function __invoke(): Response
    {
        $number = random_int(0, 100);

        return $this->render('index.html.twig', ['number' => $number]);
    }
}