<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class PlaningController extends AbstractController
{
    /** @Route("/rendez-vous") */
    public function __invoke(): Response
    {
        return $this->render('Page/planing.html.twig');
    }
}