class Form {
    constructor(){
        //this.title = createSprite(displayWidth/2,displayHeight/5,10,10);
        this.titleImage = loadImage("gameFiles/title.png");
        //this.title.scale = 2;
        //this.title.depth = 4;

        this.playButton = createSprite(displayWidth/2,displayHeight/2,10,10);
        this.playButtonImage = loadImage("gameFiles/playButton.png");
        this.playButton.depth = 4;
        this.playButton.scale = 1.5;
        this.playButton.visible = false;

        this.playButtonInput = createButton('Play');
        this.playButtonInput.position(this.playButton.x - 37,this.playButton.y - 32);
        this.playButtonInput.size(86,35);

        this.background = createSprite(displayWidth/2,displayHeight/2,10,10);
        this.backgroundImg = loadImage("gameFiles/background.png");
        this.background.depth = -1;
        this.background.depth = 2;
        this.background.scale = 1.2;

        this.background2 = createSprite(displayWidth/2*3,displayHeight/2,10,10);
        this.background2.depth = -1;
        this.background2.depth = 2;
        this.background2.scale = 1.2;

        this.background3 = createSprite(displayWidth/2*5,displayHeight/2,10,10);
        this.background3.depth = -1;
        this.background3.depth = 2;
        this.background3.scale = 1.2;

        this.background4 = createSprite(displayWidth/2*7,displayHeight/2,10,10);
        this.background4.depth = -1;
        this.background4.depth = 2;
        this.background4.scale = 1.2;

        this.background5 = createSprite(displayWidth/2*9,displayHeight/2,10,10);
        this.background5.depth = -1;
        this.background5.depth = 2;
        this.background5.scale = 1.2;

        this.background6 = createSprite(displayWidth/2*11,displayHeight/2,10,10);
        this.background6.depth = -1;
        this.background6.depth = 2;
        this.background6.scale = 1.2;

        this.inputBox = createInput("Name");
        this.inputBox.position(displayWidth/2 - 100,displayHeight/2);

        this.nameButton = createButton('Enter');
        this.nameButton.position(displayWidth/2 - 40,displayHeight/2 + 30);

        this.greeting = createElement('h2');

        //this.element = createElement('h3');

       
    }

    hide(){
        this.greeting.hide();
    }

    display(){
        //image(this.titleImage,displayWidth/2,displayHeight/5);
        //this.title.addImage(this.titleImage);
        this.playButton.addImage(this.playButtonImage);
        background(this.backgroundImg);

        this.background.addImage(this.backgroundImg);
        this.background2.addImage(this.backgroundImg);
        this.background3.addImage(this.backgroundImg);
        this.background4.addImage(this.backgroundImg);
        this.background5.addImage(this.backgroundImg);
        this.background6.addImage(this.backgroundImg);


        this.inputBox.hide();
        this.nameText = createElement('h2',"Enter Your Name");
        this.nameText.hide();
        this.greeting.hide();
        this.nameButton.hide();

        this.playButtonInput.mousePressed(()=>{
           // this.title.visible = false;
            this.playButton.x = 3000;
            this.playButtonInput.hide();
            
            this.inputBox.show();
            this.nameText.show();
            this.nameButton.show();

            //this.nameText.html('Enter Your Name');
            this.nameText.position(displayWidth/2 - 100,displayHeight/4);
            this.nameText.style('color','#FFFFFF');

            this.nameButton.mousePressed(()=>{
                this.nameText.hide();
                this.nameButton.hide();
                this.inputBox.hide();

                player.name = this.inputBox.value();
                playerCount+=1;
                gameState = 1;
                
            })

        })

        drawSprites();
    }

        
}