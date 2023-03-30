import fs from "fs";

function renderPage(page, config={}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK", config.cssLink || "")
        .replace("$ADMIN_LINK", config.adminLink || "");
        
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
        .replace("$FOOTER_YEAR", `© ${new Date().getFullYear() }`)
        .replace("$JS_LINK_BOTTOM", config.jsLinkBottom || "");
        
    return navbar + page + footer
};

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
};

function renderLoginPage(page, config={}) {
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
        .replace("$FOOTER_YEAR", `© ${new Date().getFullYear() }`)
        .replace("$JS_LINK_BOTTOM", config.jsLinkBottom || "");
    return page + footer
};

export default {
    renderLoginPage,
    renderPage,
    readPage
};