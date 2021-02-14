class Game{
    constructor(){

    }

    async start(){
        
        if(gameState === 0){
            form = new Form();
            form.display();
        }

        player = createSprite(200,100);
        player.addAnimation("w",playerWalk);
        player.addAnimation("i",playerIdle);
        player.setCollider("rectangle",0,0,1500,2000);
        player.scale = 0.1;
        //player1.visible = false;
    }

    play(){
        form.hide();
        player.collide(invisibleGround);
        player.collide(wall1);
        player.collide(wall2);
        player.collide(wall3);
        player.collide(wall4);
        player.collide(wall5);
        player.collide(wall6);

        gameover.x = camera.x;
        gameover.visible = false;

        restartButton.x = camera.x;

        player.collide(wall9);
        player.collide(wall10);
        player.collide(wall11);
        player.collide(wall12);
        player.collide(wall13);
        player.collide(wall14);
        player.collide(wall15);

        player.collide(barrier);

        lava7.display();
        lava16.display();

        player.velocityY = player.velocityY + 3;

        if(player.isTouching(monster) || player.isTouching(spike6) || player.isTouching(spike7) || player.isTouching(spike8) || player.isTouching(lava7hitbox) || player.isTouching(lava16hitbox)){
            gameState = 2;
        }

        

        if(keyDown('D') || keyDown('d') && dead == false){
            player.x = player.x + 20;
            facingRight = true;
            facingLeft = false;

            player.changeAnimation("w",playerWalk);
        }else if(keyDown('A') || keyDown('a') && dead == false){
            player.x = player.x - 20;
            facingLeft = true;
            facingRight = false;

            player.changeAnimation("w",playerWalk);
        }else{
            player.changeAnimation("i",playerIdle);
        }

        if(facingLeft == true){
            player.mirrorX(-1);
        }

        if(facingRight == true){
            player.mirrorX(1);
        }

        /*
        if(){
            player.velocityY = -10;
            console.log("yeetus");
        }
        */
            drawSprites();
        }
        

        end(){
            transition = transition - 3;

            push();
            fill(transition);
            rect(displayWidth/2,displayHeight/2,displayWidth*20,displayHeight*2);
            pop();

            gameover.visible = true;
            restartButton.show();

            wall1.visible = false;
            wall2.visible= false;
            wall3.visible = false;
            wall4.visible = false;
            wall5.visible = false;
            wall6.visible = false;
            spike6.visible = false;
            spike7.visible =  false;
            spike8.visible = false;
            wall9.visible = false;
            wall10.visible = false;
            wall11.visible = false;
            wall12.visible = false;
            wall13.visible = false;
            wall14.visible = false;
            wall15.visible = false;
            monster.visible = false;
            lava7hitbox.visible = false;
            lava16hitbox.visible = false;

            form.background.visible = false;
            form.background2.visible = false;
            form.background3.visible = false;
            form.background4.visible = false;
            form.background5.visible = false;
            form.background6.visible = false;

            door.visible = false;
            player.visible = false;

            drawSprites();

            

            restartButton.mousePressed(()=>{
                gameState = 1;

                wall1.visible = true;
                wall2.visible= true;
                wall3.visible = true;
                wall4.visible = true;
                wall5.visible = true;
                wall6.visible = true;
                spike6.visible = true;
                spike7.visible =  true;
                spike8.visible = true;
                wall9.visible = true;
                wall10.visible = true;
                wall11.visible = true;
                wall12.visible = true;
                wall13.visible = true;
                wall14.visible = true;
                wall15.visible = true;
                monster.visible = true;
                lava7hitbox.visible = true;
                lava16hitbox.visible = true;

                form.background.visible = true;
                form.background2.visible = true;
                form.background3.visible = true;
                form.background4.visible = true;
                form.background5.visible = true;
                form.background6.visible = true;

                player.visible = true;
                monster.visible = true;
                door.visible = true;

                player.x = 200;
                player.y = 200;

                monster.x = -800;
                monster.y = 400;

                gameover.visible = false;
                restartButton.hide();
                transition = 255;

                
            })
        }   
        }


