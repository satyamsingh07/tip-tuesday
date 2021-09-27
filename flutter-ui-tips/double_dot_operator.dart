class User {
  String name;
  double power ;
  void printUser(){
  print( “name $name power $power”);
  }
}

/// without cascade operator
User user = new User();
user.name = “Jhon Doe”
user.rank=10;
user.updateProfile();


/// With cascade operator 
User()
..name = “Jhon Doe”
..rank=10;
..updateProfile();
