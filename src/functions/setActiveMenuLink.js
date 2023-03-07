
export const setActiveMenuLink = (menuLinkId) => {
    document.querySelector('.activeMenuLink') && document.querySelector('.activeMenuLink').removeAttribute('class');
    document.querySelector(`#${menuLinkId}`).className = 'activeMenuLink';
}