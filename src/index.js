import { dom, router } from '@artevelde-uas/canvas-lms-app';

import t from './i18n';


export default function () {

    // Remove the Inbox menu item
    dom.onElementReady('#header li.menu-item:has(svg.ic-icon-svg--inbox)').then(inboxMenuItem => {
        inboxMenuItem.remove();
    });

    // Reroute calls to inbox
    router.onRoute('inbox', () => {
        const dashboardUrl = router.getUrl('dashboard');

        location.replace(dashboardUrl);
    });

    return {
        ...require('../package.json'),
        title: t('package.title'),
        description: t('package.description')
    };
}
