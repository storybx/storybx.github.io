const listen = () => {
    window.addEventListener("hashchange", route)
  }
  
  const route = () => {
    var hash = window.location.hash.slice(1)
    if (hash == "") {
      hash = "featured"
    }

    getPage(hash).then((data) =>{
      [text, ok] = data
      var story = document.getElementsByClassName("story")[0]

      if (ok){
        story.innerHTML = text
      } else{
        story.innerHTML = `<p class="stitle"> can't find page </p>`
      }
    })
  }

  const getPage = async (hash) => {
    file = "stories/" + hash + ".html"
    const page = await fetch(file)
    return [page.text(), page.ok]
  }