(async () => {
    const products = [
        "Copper wire scrap",
        "Electrolytic copper",
        "Aluminum ingot",
        "Aluminum wire scrap",
        "Copper rod",
        "Aluminum MIG wire",
        "Lead ingot",
        "Zinc ingot",
        "Tin ingot",
        "Nickel cathode",
        "Magnesium ingot"
    ];

    const results = {};
    const links = Array.from(document.querySelectorAll('a.list-title, a.item-title')); // Adjust selectors based on common MIC patterns
    
    // Fallback to all links if specific class not found
    const allLinks = links.length > 0 ? links : Array.from(document.querySelectorAll('a'));

    products.forEach(type => {
        const foundLink = allLinks.find(a => {
            const text = a.innerText.toLowerCase();
            const keywords = type.toLowerCase().split(' ');
            return keywords.every(kw => text.includes(kw));
        });
        if (foundLink) {
            results[type] = foundLink.href;
        }
    });

    return results;
})()