<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InscriptionController extends AbstractController
{
     /** @Route("/inscription") */
    public function __invoke(): Response
    {
        return $this->render('Account/inscription.html.twig');
    }
}