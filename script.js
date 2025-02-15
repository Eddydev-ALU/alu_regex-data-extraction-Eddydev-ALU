function extractData() {
    const text = document.getElementById("inputText").value;

    // Regular Expressions
    const emailRegex = /\b[\w.-]+@[\w.-]+\.\w+\b/g;
    const urlRegex = /https?:\/\/[\w-]+(?:\.[\w-]+)+\/?(?:[\w\/.-]*)?/g;
    const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    const hashtagRegex = /#\w+/g;
    const currencyRegex = /\$\d{1,3}(,\d{3})*(\.\d{2})?/g;

    // Extract data
    const emails = text.match(emailRegex) || [];
    const urls = text.match(urlRegex) || [];
    const phones = text.match(phoneRegex) || [];
    const hashtags = text.match(hashtagRegex) || [];
    const currencies = text.match(currencyRegex) || [];

    // Display results
    document.getElementById("emails").textContent = emails.join(", ") || "None found";
    document.getElementById("urls").textContent = urls.join(", ") || "None found";
    document.getElementById("phones").textContent = phones.join(", ") || "None found";
    document.getElementById("hashtags").textContent = hashtags.join(", ") || "None found";
    document.getElementById("currencies").textContent = currencies.join(", ") || "None found";

    const outputDiv = document.querySelector('.output');
    if (emails.length > 0 || urls.length > 0 || phones.length > 0 || hashtags.length > 0 || currencies.length > 0)  {
        outputDiv.style.display = 'block';
    } else {
        outputDiv.style.display = 'block';
    }
}
