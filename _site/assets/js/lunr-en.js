var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "A nova Ordem Mundial",
      excerpt: "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: ["NWO"],
      tags: ["content","iluminatti"],
      id: 0
    });
    
  
    idx.add({
      title: "My Sample Article",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: ["Markup"],
      tags: ["content","css","formatting","html","marku"],
      id: 1
    });
    
  
    idx.add({
      title: "Aquecimento Global",
      excerpt: "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: [],
      tags: [],
      id: 2
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "A nova Ordem Mundial",
        "url": "http://localhost:4000/nwo/new-world-order/",
        "excerpt": "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "My Sample Article",
        "url": "http://localhost:4000/markup/my-sample-article/",
        "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Aquecimento Global",
        "url": "http://localhost:4000/global-warming/",
        "excerpt": "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Resultado(s) achado(s)</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
