import { dom, router } from '@artevelde-uas/canvas-lms-app';


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

    return require('../package.json');
}
