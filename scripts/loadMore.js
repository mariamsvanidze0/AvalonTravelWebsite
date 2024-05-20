
        const btnsLearnMore = document.querySelectorAll('.loadMoreBtn');
      const additionalContents = document.querySelectorAll('.additional-content');
      
      btnsLearnMore.forEach((btn, index) => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
              const additionalContent = additionalContents[index];
              if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
                
                  additionalContent.style.display = 'block';
                  this.textContent = 'Load Less'; 
                }  else {
                    additionalContent.style.display = 'none';
                    this.textContent = 'Load More'; 
                }
            });
        });
      
