const dropdown = document.getElementById("album_art_drop");

function toggleArtwork() {
    const selectedValue = dropdown.value;

    if (selectedValue == "Singles Artwork"){

        document.querySelectorAll('.primary_art').forEach(el => {
          el.classList.add('hidden');
        });


        document.querySelectorAll('.single_art').forEach(el => {
          el.classList.remove('hidden');
        });

    }

    else {
        document.querySelectorAll('.single_art').forEach(el => {
          el.classList.add('hidden');
        });

        document.querySelectorAll('.primary_art').forEach(el => {
          el.classList.remove('hidden');
        });
    }
    
    localStorage["songlist_dropdown"] = selectedValue; // only strings

}

dropdown.addEventListener('change', toggleArtwork);

dropdown.value = localStorage["songlist_dropdown"] || "Singles Artwork";

// Set the correct visibility on page load
toggleArtwork();