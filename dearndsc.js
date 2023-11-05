var mainElement = document.querySelector("main");
var blogContentBox = mainElement.querySelector(".blog-content-box");

// 克隆.blog-content-box元素
var clonedBlogContentBox = blogContentBox.cloneNode(true);

var preTags = clonedBlogContentBox.querySelectorAll("pre");

preTags.forEach(function (preTag) {
  var divTag = document.createElement("div");
  divTag.innerHTML = preTag.innerHTML;
  preTag.parentNode.replaceChild(divTag, preTag);
});

// 使用replaceChild方法替换原始的.blog-content-box元素
mainElement.replaceChild(clonedBlogContentBox, blogContentBox);
console.log("所有事件完成清理👌😎");
