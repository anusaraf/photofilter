const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

/*
var $oldpaper = $('#oldpaperbtn');


Caman.Filter.register("oldpaper", function () {

    this.lomo(10);
   
    this.render();
});


$oldpaper.on('click', function (e) {
    Caman('#canvas', img, function () {
        this.oldpaper();

        this.lomo();
        this.render();
    });
});
*/

//TODO FILTER AND EFFECTS
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        if (e.target.classList.contains('brightness-add')) {
            Caman('#canvas', img, function () {
                this.brightness(5).render();
                this.Blendingmode('multiply');
            });
        } else if (e.target.classList.contains('brightness-remove')) {
            Caman('#canvas', img, function () {
                this.brightness(-5).render();
            });

        } else if (e.target.classList.contains('contrast-add')) {
            Caman('#canvas', img, function () {
                this.contrast(5).render();
            });

        } else if (e.target.classList.contains('contrast-remove')) {
            Caman('#canvas', img, function () {
                this.contract(-5).render();
            });

        } else if (e.target.classList.contains('saturation-add')) {
            Caman('#canvas', img, function () {
                this.saturation(5).render();
            });

        } else if (e.target.classList.contains('saturation-remove')) {
            Caman('#canvas', img, function () {
                this.saturation(-5).render();
            });

        } else if (e.target.classList.contains('vibrance-add')) {
            Caman('#canvas', img, function () {
                this.vibrance(5).render();
            });

        } else if (e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas', img, function () {
                this.vibrance(-5).render();
            });

        } else if (e.target.classList.contains('sepia-add')) {
            Caman('#canvas', img, function () {
                this.sepia(20).render();
            });


        } else if (e.target.classList.contains('sepia-remove')) {
            Caman('#canvas', img, function () {
                this.sepia(-10).render();
            });
        

        } else if (e.target.classList.contains('hue-add')) {
            Caman('#canvas', img, function () {
                this.hue(10).render();
            });



        } else if (e.target.classList.contains('hue-remove')) {
            Caman('#canvas', img, function () {
                this.hue(-5).render();
            });



        } else if (e.target.classList.contains('sharpen-add')) {
            Caman('#canvas', img, function () {
                this.sharpen(10).render();
            });



        } else if (e.target.classList.contains('sharpen-remove')) {
            Caman('#canvas', img, function () {
                this.sharpen(-10).render();
            });


        } else if (e.target.classList.contains('gamma-add')) {
            Caman('#canvas', img, function () {
                this.gamma(0.1).render();
            });


        } else if (e.target.classList.contains('gamma-remove')) {
            Caman('#canvas', img, function () {
                this.gamma().render();
            });


        } else if (e.target.classList.contains('stackBlur-add')) {
            Caman('#canvas', img, function () {
                this.stackBlur(5).render();
            });



        } else if (e.target.classList.contains('stackBlur-remove')) {
            Caman('#canvas', img, function () {
                this.stackBlur(-5).render();
            });
        } else if (e.target.classList.contains('noise-add')) {
            Caman('#canvas', img, function () {
                this.noise(10).render();
            });

        } else if (e.target.classList.contains('noise-remove')) {
            Caman('#canvas', img, function () {
                this.noise(-10).render();
            });


        } else if (e.target.classList.contains('exposure-add')) {
            Caman('#canvas', img, function () {
                this.exposure(10).render();
            });


        } else if (e.target.classList.contains('exposure-remove')) {
            Caman('#canvas', img, function () {
                this.exposure(-5).render();
            });


        } else if (e.target.classList.contains('clip-add')) {
            Caman('#canvas', img, function () {
                this.clip(10).render();
            });


        } else if (e.target.classList.contains('clip-remove')) {
            Caman('#canvas', img, function () {
                this.clip(-10).render();
            });







        } else if (e.target.classList.contains('vintage-add')) {
            Caman('#canvas', img, function () {
                this.vintage().render();
                
            });

        } else if (e.target.classList.contains('lomo-add')) {
            Caman('#canvas', img, function () {
                this.lomo().render();
            });

        } else if (e.target.classList.contains('nostalgia-add')) {
            Caman('#canvas', img, function () {
                this.nostalgia().render();
            });

        } else if (e.target.classList.contains('clarity-add')) {
            Caman('#canvas', img, function () {
                this.clarity().render();
            });

        } else if (e.target.classList.contains('pinhole-add')) {
            Caman('#canvas', img, function () {
                this.pinhole().render();
            });

        } else if (e.target.classList.contains('crossprocess-add')) {
            Caman('#canvas', img, function () {
                this.crossProcess().render();
            });

        } else if (e.target.classList.contains('herMajesty-add')) {
            Caman('#canvas', img, function () {
                this.herMajesty().render();
            });


        } else if (e.target.classList.contains('sinCity-add')) {
            Caman('#canvas', img, function () {
                this.sinCity().render();
            });

        } else if (e.target.classList.contains('love-add')) {
            Caman('#canvas', img, function () {
                this.love().render();
            });

        } else if (e.target.classList.contains('sunrise-add')) {
            Caman('#canvas', img, function () {
                this.sunrise().render();
            });


        } else if (e.target.classList.contains('grungy-add')) {
            Caman('#canvas', img, function () {
                this.grungy().render();
            });



        } else if (e.target.classList.contains('jarques-add')) {
            Caman('#canvas', img, function () {
                this.jarques().render();
            });


        } else if (e.target.classList.contains('glowingsun-add')) {
            Caman('#canvas', img, function () {
                this.glowingSun().render();
            });


        } else if (e.target.classList.contains('orangePeel-add')) {
            Caman('#canvas', img, function () {
                this.orangePeel().render();
            });


        } else if (e.target.classList.contains('posterize-add')) {
            Caman('#canvas', img, function () {
                this.posterize(8, 8).render();
            });

        } else if (e.target.classList.contains('radialBlur-add')) {
            Caman('#canvas', img, function () {
                this.radialBlur().render();
            });


        } else if (e.target.classList.contains('emboss-add')) {
            Caman('#canvas', img, function () {
                this.emboss().render();
            });

        } else if (e.target.classList.contains('oldBoot-add')) {
            Caman('#canvas', img, function () {
                this.oldBoot().render();
            });

        } else if (e.target.classList.contains('edgeEnhance-add')) {
            Caman('#canvas', img, function () {
                this.edgeEnhance().render();
            });

        } else if (e.target.classList.contains('hazyDays-add')) {
            Caman('#canvas', img, function () {
                this.hazyDays().render();
            });
       

       

        } 
    }
});

//REVERT FILTER
revertBtn.addEventListener('click', (e) => {
    Caman('#canvas', img, function () {
        this.revert();
    });
});

0
//UPLOAD FILE

uploadFile.addEventListener('change', (e) => {

    //GET FILE
    const file = document.getElementById('upload-file')
        .files[0];

    //INIT FILEREADER

    const reader = new FileReader();

    if (file) {
        //set file name
        fileName = file.name;
        //read data as url
        reader.readAsDataURL(file);
    }

    //add img to canvas
    reader.addEventListener('load', () => {
        img = new Image();
        //set src
        img.src = reader.result;
        //on img load, add to canvas
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute('data-caman-id');

        };
    },
        false
    );

});

//download event

downloadBtn.addEventListener('click', (e) => {

    const fileExtension = fileName.slice(-4);

    let newFileName;

    if (fileExtension === '.jpg' || fileExtension === '.png') {

        newFileName = fileName.substring(0, fileName.length
            - 4) + 'edited.jpg';

    }
    //call download
    download(canvas, newFileName);
});

//Download function

function download(canvas, filename) {

    let e;
    const link = document.createElement('a');

    link.download = filename;

    link.href = canvas.toDataURL('image/jpeg', 0.8);

    e = new MouseEvent('click');
    link.dispatchEvent(e);

}



function previewcrop() {
    var width = Number(document.getElementById('wi').value);
    var height = Number(document.getElementById('he').value);
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(x, y, width, height);
    setTimeout(function () {
        resetButtonHandler();
    }, 3000);
};

var preview = document.getElementById('preview');
preview.onclick = previewcrop;


function cropImage() {
    var width = Number(document.getElementById('wi').value);
    var height = Number(document.getElementById('he').value);
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);
    Caman.('#image', function () {
        this.crop(width, height, x, y);
        this.render();
    });
};
var crop = document.getElementById('crop');
crop.onclick = cropImage;

}, false);