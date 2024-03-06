angular.module('animeApp', [])
    .controller('animeController', function ($scope) {
        $scope.products = [
            { name: 'Men Full Sleeve Printed Hooded shirt', image: 'image/f1.jpg', category: 'Fashion', price: 700 },
            { name: 'Men Regular Mid Rise Blue Jeans', image: 'image/pa1.jpg', category: 'Fashion',price: 700},
            { name: 'Men Regular Fit Black Pure Trousers', image: 'image/pa2.jpg', category: 'Fashion',price: 700 },
            { name: 'HIERRO Running Shoes For Men', image: 'image/f4.jpg', category: 'Fashion',price: 700 },
            { name: 'Excursion Tr16 Running Shoes', image: 'image/f5.jpg', category: 'Fashion',price: 700 },
            { name: 'Shirt 6', image: 'image/f6.jpg', category: 'Fashion',price: 700 },
            { name: 'Apple Iphone 13', image: 'image/mo4.jpeg', category: 'Mobiles',price: 79999 },
            { name: 'Apple Iphone 14 pro', image: 'image/mo2.jpeg', category: 'Mobiles',price: 140000 },
            { name: 'Realme 9 5G', image: 'image/mo5.jpeg', category: 'Mobiles',price: 29999 },
            { name: 'Galaxy S22', image: 'image/mo1.jpeg', category: 'Mobiles',price: 100000 },
            { name: 'Galaxy Z Fold 4', image: 'image/mo3.jpeg', category: 'Mobiles',price: 69999 },
            { name: 'Phone 6', image: 'image/m133.jpg', category: 'Mobiles',price: 70000 },
            { name: 'Intex LED-3243', image: 'image/ei1.jpeg', category: 'Electronics', price: 19999 },
            { name: 'Intex LED', image: 'image/ei2.jpeg', category: 'Electronics', price: 2999 },
            { name: 'LG', image: 'image/ei3.jpeg', category: 'Electronics',price: 2999 },
            { name: 'LG', image: 'image/ei4.jpeg', category: 'Electronics',price: 2999 }
        ];
        $scope.searchQuery = '';
        $scope.activeCategory = 'Home';
        $scope.cart = [];
    

        $scope.updateImages = function () {
            $scope.filteredProducts = $scope.products.filter(function (product) {
                return product.category.toLowerCase().includes($scope.searchQuery.toLowerCase()) ||
                    product.name.toLowerCase().includes($scope.searchQuery.toLowerCase());
            });
            $scope.activeCategory = $scope.searchQuery ? 'Search Results' : 'Home';
        };


        $scope.filterCategory = function (category) {
            $scope.searchQuery = '';

            if (category === 'Home') {
                $scope.activeCategory = 'Home';
                $scope.filteredProducts = $scope.products;
            } else {
                $scope.activeCategory = category;
                $scope.filteredProducts = $scope.products.filter(function (product) {
                    return product.category === category;
                });
            }
        };

        $scope.getTotal = function () {
            return $scope.cart.reduce(function (total, item) {
                return total + (item.price * item.quantity);
            }, 0).toFixed(2);
        };

        $scope.addToCart = function (product) {
            var index = $scope.cart.findIndex(item => item.name === product.name);

            if (index !== -1) {
                $scope.cart[index].quantity++;
            } else {
                $scope.cart.push({ name: product.name, quantity: 1, price: product.price });
            }

            console.log(product.name + ' added to the cart and bought now.');
        };

        $scope.removeFromCart = function (item) {
            var index = $scope.cart.findIndex(cartItem => cartItem.name === item.name);

            if (index !== -1) {
                $scope.cart.splice(index, 1);
            }
        };

        $scope.getProductImage = function (productName) {
            var product = $scope.products.find(p => p.name === productName);
            return product ? product.image : '';
        };
        $scope.isMenuOpen = false;
        $scope.toggleMenu = function () {
            $scope.isMenuOpen = !$scope.isMenuOpen;
        };
        
        $scope.Order=function(){
            alert("Order Palced");
        }

        $scope.updateImages();
    });
