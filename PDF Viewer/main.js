const url = "starbucks.pdf";

let pdfDoc = null, pageNum = 1, pageIsRendering = false, pageNumIsPending = null;
let scale = 0.8, canvas = document.querySelector("#pdf_render"),
 ctx = canvas.getContext("2d");

// Render the page
const renderPage = num => {
    pageIsRendering = true;
    // Get Page
    pdfDoc.getPage(num).then(page => {
        // Set Scale
        const viewport = page.getViewport({scale});
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderCtx = {
            canvasContext: ctx,
            viewport
        }

        page.render(renderCtx).promise.then(() => {
            pageIsRendering = false;
            if (pageNumIsPending !== null) {
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }
        });
        // Output current page
        document.querySelector("#page_num").textContent = num;
    });
};

// Check for pages rendering
const queueRenderPage = num => {
    if (pageIsRendering) {
        pageNumIsPending = num;
    } else {
        renderPage(num);
    }
}

//Show Prev Page
const showPrevPage = () => {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}

//Show Next Page
const showNextPage = () => {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}

// Get Document

pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector("#page_count").textContent = pdfDoc.numPages;

    renderPage(pageNum)
})
.catch(err => {
    //Display error
    const div = document.createElement("div");
    div.className = "error";
    div.appendChild(document.createTextNode(err.message));
    document.querySelector("body").insertBefore(div, canvas);
    // Remove top bar
    document.querySelector(".top_bar").style.display = "none";
});

// Zoom In / Zoom Out

const zoomIn = () => {
    if (scale == 1.5000000000000004) {
        return;
    }
    
    scale += 0.1;
    renderPage(pageNum)
    document.querySelector("#scaleValue").textContent = "%" + (Math.round(scale * 100));
}

const zoomOut = () => {
    if (scale == 0.5000000000000001) {
        return;
    }
    scale -= 0.1;
    renderPage(pageNum)
    document.querySelector("#scaleValue").textContent = "%" + (Math.round(scale * 100));
}

// Button events

document.querySelector("#prev_page").addEventListener("click", showPrevPage);
document.querySelector("#next_page").addEventListener("click", showNextPage);
document.querySelector("#zoomIn").addEventListener("click", zoomIn);
document.querySelector("#zoomOut").addEventListener("click", zoomOut);
let = scaleValue = document.querySelector("#scaleValue")
scaleValue.textContent = "%" + (Math.round(scale * 100));

