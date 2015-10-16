<?php
/*
 * This file is part of the Finnish Pack for Flarum.
 *
 * (c) Mohamed Hisham <hisham@mhisham.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FlarumFinnish;

use Flarum\Support\Extension as BaseExtension;
use Illuminate\Events\Dispatcher;
use Flarum\Events\RegisterLocales;

class Extension extends BaseExtension
{
    public function listen(Dispatcher $events)
    {
        $events->listen(RegisterLocales::class, function (RegisterLocales $event) {
            $event->addLocale('fi', 'Finnish');
            $event->addJsFile('fi', __DIR__.'/../locale/core.js');
            $event->addConfig('fi', __DIR__.'/../locale/core.php');
            $event->addTranslations('fi', __DIR__.'/../locale/core.yml');
            $event->addTranslations('fi', __DIR__.'/../locale/flags.yml');
            $event->addTranslations('fi', __DIR__.'/../locale/likes.yml');
            $event->addTranslations('fi', __DIR__.'/../locale/lock.yml');
            $event->addTranslations('fi', __DIR__.'/../locale/mentions.yml');
            $event->addTranslations('fi', __DIR__.'/../locale/pusher.yml');
            $event->addTranslations('fi', __DIR__.'/../locale/reports.yml');
            $event->addTranslations('fi', __DIR__.'/../locale/sticky.yml');
            $event->addTranslations('fi', __DIR__.'/../locale/subscriptions.yml');
            $event->addTranslations('fi', __DIR__.'/../locale/tags.yml');
        });
    }
}
