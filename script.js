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
    document.getElementById("emails").innerHTML = emails.length > 0 ? `(${emails.length}): ${emails.join(", ")}` : ': <span style="color: red;">None found</span>';
    document.getElementById("urls").innerHTML = urls.length > 0 ? `(${urls.length}): ${urls.join(", ")}` : ': <span style="color: red;">None found</span>';
    document.getElementById("phones").innerHTML = phones.length > 0 ? `(${phones.length}): ${phones.join(", ")}` : ': <span style="color: red;">None found</span>';
    document.getElementById("hashtags").innerHTML = hashtags.length > 0 ? `(${hashtags.length}): ${hashtags.join(", ")}` : ': <span style="color: red;">None found</span>';
    document.getElementById("currencies").innerHTML = currencies.length > 0 ? `(${currencies.length}): ${currencies.join(", ")}` : ': <span style="color: red;"> None found</span>';

    // hide the extracted data if there is no data
    const outputDiv = document.querySelector('.output');
    if (emails.length > 0 || urls.length > 0 || phones.length > 0 || hashtags.length > 0 || currencies.length > 0)  {
        outputDiv.style.display = 'block';
    } else {
        outputDiv.style.display = 'none';
    }
}
