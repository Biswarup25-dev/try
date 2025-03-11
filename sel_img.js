
        async function uploadImage() {
            const file = document.getElementById("uploadInput").files[0];
            

           

            if (!file) return alert("NOt possible");

            const formData = new FormData();
            formData.append("image", file);

            const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            document.getElementById("memeImage").src = data.imageUrl;
            document.getElementById("caption").innerText = data.caption;
        }
  
