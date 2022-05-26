//SPDX-License-Identifier: MIT
pragma solidity ^0.4.25;

contract Twitter{
    address public manager;
    uint private counter;

    struct tweet {
        address tweeter;
        uint id;
        string tweetText;
        string tweetImage;
    }
    mapping(uint256 => tweet) Tweets;

    constructor() public {
        counter = 0;
        manager = msg.sender;
    }

    event tweetCreated (
        address tweeter,
        uint id,
        string tweetText,
        string tweetImage
    );

    function addTweet(string memory tweetText, string memory tweetImg) public payable {
        tweet storage newTweet = Tweets[counter];
        newTweet.tweetText = tweetText;
        newTweet.tweetImage = tweetImg;
        newTweet.tweeter = msg.sender;
        newTweet.id = counter;

        emit tweetCreated(
            msg.sender,
            counter,
            tweetText,
            tweetImg
        );

        counter ++;
    }

    function getTweer(uint id) public view returns(
        string memory,
        string memory,
        address
    ) {
        require(id < counter, "Tweet doesn't exist");
            tweet storage t = Tweets[id];
            return (t.tweetText, t.tweetImage, t.tweeter);

    }
    
}