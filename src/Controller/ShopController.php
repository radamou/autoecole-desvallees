<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ShopController extends AbstractController
{
    /** @Route("/boutique") */
    public function __invoke(): Response
    {
        return $this->render('Page/shop.html.twig');
    }
}