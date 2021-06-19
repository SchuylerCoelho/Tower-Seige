class Slingshot{
    constructor(B1,pointB){
        var options = {
            bodyA:B1,
            pointB:pointB,
            stiffness:0.04,
            length:10,
    
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options)
        
        World.add(world, this.slingshot)
    }
    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position
            var pointB = this.pointB
            strokeWeight(5);
            stroke('rgb(42,22,8)')
            
                line(pointA.x , pointA.y, pointB.x , pointB.y)
        }
           
                
            
           
        
       
        
    
    }
    fly(){
        this.slingshot.bodyA = null
    }
    attach(body){
        this.slingshot.bodyA = body
    }
    
    
    }
    