const createNavbar = () => {
    const navbarSetup = [
        {
            type: 'div',
            id: 'navbarContainer',
            class: 'navbarContainer',
            appendTo: 'here',
            css: 'height:50px;width:50px;position:absolute;top:0;right:0;cursor:pointer;',
        },
        {
            type: 'div',
            id: 'menuContainer',
            class: 'menuContainer',
            appendTo: 'navbarContainer',
            css: 'height:100%;width:100%;',

        },
        {
            type: 'img',
            class: 'navImg',
            src: '../public/icon.png',
            appendTo: 'menuContainer',
            css: 'height:100%;width:100%;',
            onClick:()=>{
                const displayState = document.getElementById('menuWrapper').style;;
                if(displayState.display === 'none'){
                    displayState.display = 'flex';
                    return;
                }
                if(displayState.display === 'flex'){
                    displayState.display = 'none';
                    return;
                }

            }
        },
    ];
    const menuSetup = [
        {
            type: 'div',
            id: 'menuWrapper',
            class: 'menuWrapper',
            appendTo: 'navbarContainer',
            css: 'background-color:#111111;height:300px;width:300px;position:absolute;top:100%;right:25%;display:none;flex-direction:column;justify-content:space-between;text-align:center;border:2px solid grey;border-radius:10px;',
        },
        {
            type: 'button',
            id: 'button',
            class: 'button',
            appendTo: 'menuWrapper',
            css: 'all:unset;border-bottom:1px solid white;cursor:pointer;height:20%;width:100%;border-radius:10px;font-size:1.5em;letter-spacing:2px;color:white;',
            onHover: (e) => e.target.style.color = 'grey',
            onLeave: (e) => e.target.style.color = 'white',
            value: 'Home'
        },
        {
            type: 'button',
            id: 'button',
            class: 'button',
            appendTo: 'menuWrapper',
            css: 'all:unset;border-bottom:1px solid white;cursor:pointer;height:20%;width:100%;border-radius:10px;font-size:1.5em;letter-spacing:2px;color:white;',
            onHover: (e) => e.target.style.color = 'grey',
            onLeave: (e) => e.target.style.color = 'white',
            value: 'Contact'
        },
        {
            type: 'button',
            id: 'button',
            class: 'button',
            appendTo: 'menuWrapper',
            css: 'all:unset;border-bottom:1px solid white;cursor:pointer;height:20%;width:100%;border-radius:10px;font-size:1.5em;letter-spacing:2px;color:white;',
            onHover: (e) => e.target.style.color = 'grey',
            onLeave: (e) => e.target.style.color = 'white',
            value: 'More'
        },
        {
            type: 'button',
            id: 'button',
            class: 'button',
            appendTo: 'menuWrapper',
            css: 'all:unset;border-bottom:1px solid white;cursor:pointer;height:20%;width:100%;border-radius:10px;font-size:1.5em;letter-spacing:2px;color:white;',
            onHover: (e) => e.target.style.color = 'grey',
            onLeave: (e) => e.target.style.color = 'white',
            value: 'About'
        },
        {
            type: 'button',
            id: 'button',
            class: 'button',
            appendTo: 'menuWrapper',
            css: 'all:unset;border-bottom:1px solid white;cursor:pointer;height:20%;width:100%;border-radius:10px;font-size:1.5em;letter-spacing:2px;color:white;',
            onHover: (e) => e.target.style.color = 'grey',
            onLeave: (e) => e.target.style.color = 'white',
            value: 'Donate'
        },
    ];
    const renderElements = (list) => {
        list.forEach((el, idx) => {
            let elem = document.createElement(el.type);
            elem.setAttribute('style', el.css);
            if(el.onClick) elem.onclick = ()=>el.onClick();
            if (el.type === 'img') elem.src = el.src;
            if (el.type === 'button') {
                elem.textContent = el.value
                elem.onmouseenter = (e) => el.onHover(e);
                elem.onmouseleave = (e) => el.onLeave(e);

            };
            elem.id = el.id;
            elem.classList.add(el.class)
            let parent = document.getElementById(el.appendTo);
            parent.append(elem);
        })
    }
    const renderButtons = () => {
        menuSetup.forEach((el, idx) => {
            let button = document.createElement(el.type);
        })
    }
    const renderNav = renderElements;
    const renderContainer = renderElements;

    renderNav(navbarSetup)
    renderContainer(menuSetup);
}

window.addEventListener('load',createNavbar);

