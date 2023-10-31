$(document).ready(function() {
    // Initialize variables to keep track of the game state
    let randomNumber;
    let attempts = 0;

    // Function to start a new game
    function startNewGame() {
        // Generate a random number between 1 and 100 
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;

        // Reset the game message and input fields
        $('#message').removeClass('alert-success').addClass('alert-primary').text('Try to guess the number between 1 and 100.');
        $('#guess').val('');
        $('#guess').prop('disabled', false);
        $('#check').prop('disabled', false);
        $('#try-again').hide();
    }

    // Start a new game when the page loads
    startNewGame();

    // Event handler for the "Check Guess" button
    $('#check').on('click', function() {
        // Get the user's guess from the input field
        const userGuess = parseInt($('#guess').val());
        attempts++;

        if (userGuess === randomNumber) {
            // Display a success message when the user guesses the correct number
            $('#message').removeClass('alert-primary').addClass('alert-success').text(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
            playSuccessSound();
            $('#guess').prop('disabled', true);
            $('#check').prop('disabled', true);
            $('#try-again').show();
            createFirework();
        } else if (userGuess < randomNumber) {
            // Provide a hint to try a higher number
            $('#message').text('Try a higher number.');
        } else {
            // Provide a hint to try a lower number
            $('#message').text('Try a lower number.');
        }
    });

    // Event handler for the "Try Again?" button
    $('#try-again').on('click', function() {
        // Start a new game when the "Try Again" button is clicked
        startNewGame();
    });

    // Function to play a success sound
    function playSuccessSound() {
        const audio = new Audio('../audio/success.mp3');
        audio.play();
    }

    // Function to create a fireworks animation
    function createFirework() {
        const container = $('#firework-container');
        const fireworks = 100;
        const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];

        for (let i = 0; i < fireworks; i++) {
            const firework = $('<div class="firework"></div>');
            firework.css({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: colors[Math.floor(Math.random() * colors.length)]
            });

            container.append(firework);

            // Animate the fireworks and remove them after the animation
            firework.animate({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 1
            }, 3000, function() {
                firework.fadeOut(1000, function() {
                    firework.remove();
                });
            });
        }
    }
});
