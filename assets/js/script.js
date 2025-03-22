function getNodeContent(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    return node.outerHTML;
  }
  return null;
}

function paginateContent() {
  console.log("paginateContent");
  const container = document.getElementById("resume-pages-container");

  var counter = 20;

  while (true) {
    if (counter < 0) break;

    const pages = container.querySelectorAll(".resume-page");
    const page = pages[pages.length - 1];
    const content = page.querySelector(".resume-content");
    const sections = content.querySelectorAll(".resume-section");

    const computedStyle = window.getComputedStyle(page);
    const padding = Math.round(
      parseFloat(computedStyle.getPropertyValue("padding"))
    );

    if (content.scrollHeight > page.clientHeight - 2 * padding) {
      const newPage = document.createElement("div");
      newPage.classList.add("resume-page");

      const newContent = document.createElement("div");
      newContent.classList.add("resume-content");
      newPage.appendChild(newContent);

      container.appendChild(newPage);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTitle = section.querySelector(".resume-section-title");
        const sectionTitleCloned = sectionTitle.cloneNode(true);
        const sectionSubsections = section.querySelectorAll(
          ".resume-section-content"
        );

        const newSection = document.createElement("div");
        newSection.classList.add("resume-section");
        newSection.appendChild(sectionTitleCloned);
        newContent.prepend(newSection);

        var finished = true;
        for (let i = sectionSubsections.length - 1; i >= 0; i--) {
          if (content.clientHeight > page.clientHeight - 2 * padding) {
            newSection.insertBefore(
              sectionSubsections[i],
              sectionTitleCloned.nextSibling
            );
          } else {
            finished = false;
            break;
          }
        }
        if (finished) {
          sectionTitle.remove();
        }

        if (!(content.scrollHeight > page.clientHeight - 2 * padding)) {
          break;
        }
      }
    } else {
      break;
    }
    counter--;
  }
}

function findMaxWidth(section) {
  const equalWidthElements = section.querySelectorAll(".equal-width");
  let maxWidth = 0;

  equalWidthElements.forEach((element) => {
    const width = element.getBoundingClientRect().width;
    if (width > maxWidth) {
      maxWidth = width;
    }
  });

  return maxWidth;
}

function setWidth(section, targetWidth) {
  const equalWidthElements = section.querySelectorAll(".equal-width");

  equalWidthElements.forEach((element) => {
    element.style.width = `${targetWidth}px`;
  });
}

function setEqualWidths() {
  const sections = document.querySelectorAll(".resume-section");

  sections.forEach((section) => {
    const width = findMaxWidth(section);
    if (width !== 0) setWidth(section, width);
  });
}

window.addEventListener("load", paginateContent);
window.addEventListener("load", setEqualWidths);
