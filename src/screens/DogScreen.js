import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors'
import { moderateScale } from 'react-native-size-matters'
import PetsCard from '../components/PetsCard'


const CatScreen = () => {
  let NewPets = [
    {
      id: 1,
      petName: 'lussy',
      age: '2',
      type: 'Small',
      gender: 'Female',
      category: 'Dog',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Sihagad ,pune',
      breed: 'Bully Kutta',
      distance: '5 km',
      ownDetails: {
        ownName: 'Anil',
        ownNgoname: 'Karma foundation',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://images.thequint.com/thequint/2015-02/af4decb7-6947-4b92-b4ab-e326d93787a7/pakistani%20bull%20dog.jpg?%20%20%20%20%20%20%20%20%20%20%20%20%20%20auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0',
        'https://1.bp.blogspot.com/-1UBZ9Up2eos/XwFMnNZf42I/AAAAAAAAFzk/KGph-D78Ik4-Hv75OvcaJ3xJBa9dSoI8gCK4BGAsYHg/s600/Bully%2BKutta.jpg',
        'https://101dogbreeds.com/wp-content/uploads/2015/04/White-Bully-Kutta.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLSpIlSFoC6C9KR_aLT6FegcQFnRWOqQhdKOjEos5LcJ6ZOU2BkOJimuHXFDxUWRnQPs&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9lHzClt2Xn3hUObW-s7DcNp-A43mbd8nZ0T10nuq1p4aaG45m1CpnY-JusER3-hUmWx4&usqp=CAU',
      ],
    },
    {
      id: 2,
      petName: 'jack',
      age: '3',
      type: 'Medium',
      gender: 'male',
      category: 'Dog',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'Kombai dog',
      distance: '4 km',
      ownDetails: {
        ownName: 'Kedar',
        ownNgoname: 'Make neqw life',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://upload.wikimedia.org/wikipedia/commons/a/a3/Kombai_dog.jpg',
        'http://www.petsworld.in/blog/wp-content/uploads/2014/10/Kombai-Dog.jpg',
        'https://static.wixstatic.com/media/f21c6b_ab2dfb9dc5034f86a0615c8d296e94c9~mv2.jpg/v1/fit/w_332,h_448,al_c,q_20,enc_auto/file.jpg',
        'https://www.dogbreedinfo.com/images31/CombaiBoarhoundDogRareBreedIndiaTiger2YearsOldSideView.jpg',
        'https://www.dogbreedinfo.com/images31/CombaiBoarhoundDogRareBreedIndiaTiger1Year7MonthsOld2.jpg',
      ],
    },
    {
      id: 3,
      petName: 'Rose',
      age: '1.5',
      type: 'Small',
      gender: 'Female',
      category: 'Dog',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Sihagad ,pune',
      breed: 'Himalayan Sheepdog',
      distance: '3.3 km',
      ownDetails: {
        ownName: 'Sunil',
        ownNgoname: 'Paws care',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://upload.wikimedia.org/wikipedia/commons/1/13/2._Himalayan_sheep_dog.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVBg6PwxWsEf6FdDn0v2z7VkrDsVgKe-i30HFCz9ZsTf5jcypbZSbKCBIWhE1wGarYZs&usqp=CAU',
        'https://i.pinimg.com/736x/29/ba/47/29ba47bcbd19002f0784153701dbdbc3.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmZvknJniSx-HjevGhqayGqtLzUzOh8MReRtDzW2LnUJNkaCR64XVy5x5dVITUXuIBbk&usqp=CAU',
        'https://dogdekho.com/wp-content/uploads/2021/01/gaddi.jpg',
      ],
    },
    {
      id: 4,
      petName: 'Leo',
      age: '6',
      type: 'Older',
      gender: 'male',
      category: 'Dog',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Sihagad ,pune',
      breed: 'Boxer',
      distance: '2 km',
      ownDetails: {
        ownName: 'Akshad',
        ownNgoname: 'Karma foundation',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://www.thesprucepets.com/thmb/ajY398vl9ZAcRkeVNDgTafw_kPA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/boxer-dog-breed-1117944-hero-dfe9f67a59ce4ab19ebd274c06b28ad1.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteFqcbNGKk4hkhY8dji7aoxY4aa0vsWpwVRmy-nR79z04uRNPnWEbA7y8-LpHb8d0BDo&usqp=CAU',
        'https://cdn.britannica.com/46/233846-050-8D30A43B/Boxer-dog.jpg',
        'https://s36700.pcdn.co/wp-content/uploads/2019/03/Close-up-of-a-Boxer-with-tongue-out-happy-600x400.jpg.optimal.jpg',
        'https://www.rover.com/blog/wp-content/uploads/2020/06/Boxer-2.jpg',
      ],
    },
    {
      id: 5,
      petName: 'Maggie',
      age: '0.8',
      type: 'Small',
      gender: 'Female',
      category: 'Dog',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Sus ,pune',
      breed: 'Golden Retriever',
      distance: '0.5km',
      ownDetails: {
        ownName: 'Rahul',
        ownNgoname: 'Canine Control',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://image.petmd.com/files/styles/863x625/public/2022-10/iStock-1397267365.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnp5aDT7qiItGTV2NUcDmEAKSxDkju5KW4Zp9K_Yef8YdNOhnCdZFwIklVam4KLW-C10&usqp=CAU',
        'https://www.indiantrailanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=KAq2A33j',
        'https://www.dogsnsw.org.au/media/img/BrowseAllBreed/Golden-Retriever.jpg',
        'https://cdn.britannica.com/67/28267-050-534B888F/retriever.jpg',
      ],
    },
    {
      id: 6,
      petName: 'Harley',
      age: '2',
      type: 'Small',
      gender: 'Male',
      category: 'Dog',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Sihagad ,pune',
      breed: 'Rottweiler',
      distance: '2 km',
      ownDetails: {
        ownName: 'Vishal ',
        ownNgoname: 'Animal Rescure Trust',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://cdn.britannica.com/69/234469-050-B883797B/Rottweiler-dog.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Rottweiler_standing_facing_left.jpg/800px-Rottweiler_standing_facing_left.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImz2KRZ2FetauSdobvtW1z5roTsajDeIQ3-W8NrdM7QH10MyKjSdrqw0M4QvOa-O9EZE&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH7LiIQY4K0I_zAz5uHQ8q1fpYIfGk1th27e4mRq5m-hRTcXv2EwHo2kDyohwelihb20A&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5tQs1nItGaFXpBRYc8EGeQohctPisZaPUgDBrkfvmsD6Z8QB2CFiBHHqc4AgmT-SBQ4&usqp=CAU',
      ],
    },
    {
      id: 7,
      petName: 'Ruby',
      age: '2.8',
      type: 'Medium',
      gender: 'Female',
      category: 'Dog',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Sihagad ,pune',
      breed: 'Pomeranian',
      distance: '4 km',
      ownDetails: {
        ownName: 'Rutik',
        ownNgoname: 'Pranimal Foundation',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://cdn.britannica.com/41/233841-050-4FFECCF1/Pomeranian-dog.jpg',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pomeranian.JPG/640px-Pomeranian.JPG',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3ncgINLJ38H9S-PUHwuNs55uz79YUriQIT1al-eIrV0ro3dxoB-Fo0TUUkfvXShBGXg&usqp=CAU',
        'https://media.graphassets.com/output=format:webp/XLy72uxSumFGXom5IrEa',
      ],
    },
    {
      id: 8,
      petName: 'Max',
      age: '4.2',
      type: 'Older',
      gender: 'male',
      category: 'Dog',
      about:
        'The Pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, short-muzzled face, and curled tail.',
      address: 'Hinjawadi,pune',
      breed: 'Pug',
      distance: '5 km',
      ownDetails: {
        ownName: 'Rushi',
        ownNgoname: 'Vrundavan ',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://assets.orvis.com/is/image/orvisprd/AdobeStock_71493946?wid=1023&src=is($object$:7-3)',
        'https://dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/7-running.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcQ3CiWFcSQsSvfxK8zxzBQJ3oaput7JUL_qu_G0o7d86B8L-jy-nvyp1d0x5B8wAfJE&usqp=CAU',
        'https://e3.365dm.com/22/05/2048x1152/skynews-pug-dog_5774995.jpg',
        'https://premierpups.com/azure/affordablepup/pups/pug-breed-information-637647983613775795.jpg?w=557&h=557&mode=crop&autorotate=1',
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/5/19/pug-1-5910732-1652976328573.jpg',
      ],
    },
    {
      id: 9,
      petName: 'Rocky',
      age: '2',
      type: 'Small',
      gender: 'Male',
      category: 'Dog',
      about:
        'The German Shepherd or Alsatian is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899. It was originally bred as a herding dog, for herding sheep. ',
      address: 'Pimpari,pune',
      breed: 'German Shepherd',
      distance: '2 km',
      ownDetails: {
        ownName: 'Vinod',
        ownNgoname: 'SAahas for Animals',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg',
        'https://cdn.shopify.com/s/files/1/0894/7020/files/German-Shepherd_480x480.jpg?v=1627467664',
        'https://media-be.chewy.com/wp-content/uploads/2021/05/11162926/German-Shepherd-1358309706-1024x591.jpg',
        'https://www.insidedogsworld.com/wp-content/uploads/2017/06/German-Shepherd-Standard-Coat-GSC-1000x575-1-1-1-1.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UmvSKxEvcL2aM5yTLAQ4vnNImj_YVH9N33SwcVH5jiNZB6EEK4qXC8Hlcfuse_hBz6M&usqp=CAU',
      ],
    },
    {
      id: 10,
      petName: 'Zoey',
      age: '3.2',
      type: 'Medium',
      gender: 'Female',
      category: 'Dog',
      about:
        'The Bakharwal dog is found in northern India. It is an ancient working Indian dog breed found in Ladakh and across the Pir Panjal Range of India, where it has been bred for many centuries by the Bakarwal and Gujjar nomadic tribes, as a livestock guardian dog and settlement protector.',
      address: 'Sihagad ,pune',
      breed: 'Bakharwal dog',
      distance: '3 km',
      ownDetails: {
        ownName: 'Anil',
        ownNgoname: 'Floof Dog',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://thesmartcanine.com/wp-content/uploads/2018/09/bakharwal-looks.png.webp',
        'https://www.smartdoglover.com/wp-content/uploads/2020/03/Best-Outdoor-Dog-Chains-300x200.jpg',
        'https://i.pinimg.com/236x/4b/6d/b9/4b6db911471f4ec98aef1589cb96f9b2--childhood-memories-indian.jpg',
        'https://i.pinimg.com/600x315/20/d5/8c/20d58c73c93633748311b4b9aed351ec.jpg',
        'https://www.researchgate.net/profile/Melanie-Fillios/publication/297893383/figure/fig3/AS:339376346288130@1457925034898/North-Borneo-dog-Niah-Sarawak-Malaysia-2012_Q320.jpg',
      ],
    },
    {
      id: 11,
      petName: 'lussy',
      age: '2',
      type: 'Small',
      gender: 'Female',
      category: 'Cat',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Sihagad ,pune',
      breed: 'Maine Coon',
      distance: '2 km',
      ownDetails: {
        ownName: 'Anil',
        ownNgoname: 'Karma foundation',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://i.pinimg.com/originals/e9/96/61/e99661721e1c294498b723009aaf2064.jpg',
        'https://live.staticflickr.com/4010/4453646076_a819636c69_c.jpg',
        'https://www.ephotozine.com/resize/2018/19/xlrg/227767_1526009792.jpg?RTUdGk5cXyJFAQgJSEc4egtnfAYYGkVUGwBdOh80SxgRBAAhdSMKY1dhB2osTU0LIjUVDw==',
        'https://thumbs.dreamstime.com/b/feral-indian-cat-staring-camera-roof-house-feral-indian-cat-128551342.jpg',
        'https://thumbs.dreamstime.com/b/indian-cat-nature-photography-90912378.jpg',
      ],
    },
    {
      id: 12,
      petName: 'Aldoii',
      age: '3',
      type: 'Medium',
      gender: 'Female',
      category: 'Cat',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Banner,pune',
      breed: 'Bombay',
      distance: '7 km',
      ownDetails: {
        ownName: 'Vishal ',
        ownNgoname: 'Animal Rescure Trust',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://thumbs.dreamstime.com/b/indian-cat-nature-photography-90912378.jpg',
        'https://thumbs.dreamstime.com/b/cat-walk-not-interested-anything-no-76859698.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFyPXTMErxh56zx9R2kxRYZH6Jl9RUiVsU8KKVJSGGuO_OYLv7-YpfORHKamJbSB9a8c&usqp=CAU',
        'https://i.pinimg.com/736x/62/e8/65/62e865d66b007fe8525c8a6dcef22484.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNo4iCYoze_ktbXlYBuJL0hDWY00wHUaejo-mHWgxHS_jqV_y0F2bYelVVZSdTW3gpG0&usqp=CAU',
      ],
    },
    {
      id: 13,
      petName: 'Nrry',
      age: '2',
      type: 'Small',
      gender: 'Female',
      category: 'Cat',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Sihagad ,pune',
      breed: 'Siamese',
      distance: '6 km',
      ownDetails: {
        ownName: 'Rushi',
        ownNgoname: 'Vrundavan ',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://thumbs.dreamstime.com/b/indian-cuty-cat-pic-home-animal-love-168016710.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/1/1a/Indian_Cat_pic.jpg',
        'https://c8.alamy.com/comp/2BFDNF3/portrait-of-indian-cat-2BFDNF3.jpg',
        'https://www.petsworld.in/blog/wp-content/uploads/2017/08/stray-cat-2.jpg',
        'https://www.shutterstock.com/image-photo/indian-billi-breed-known-common-260nw-1792626598.jpg',
      ],
    },
    {
      id: 14,
      petName: 'Pepper',
      age: '4.3',
      type: 'Older',
      gender: 'Female',
      category: 'Cat',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Hinjawadi,pune',
      breed: 'Himalayan',
      distance: '12 km',
      ownDetails: {
        ownName: 'Anil',
        ownNgoname: 'Karma foundation',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://www.teahub.io/photos/full/216-2166046_indian-cat-images-hd.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXF9Hdh3WRc61j-arYJRn9luoB0hUrDdiJmtSIdaQ9-uc2zvczR50d5326uQZLhsOn1k&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6ClxoV9BVypKWvtrAoCxxykcaKLKu33t9TY0n1zsw3U1mow2jqKSTnyDs0lcKzgNN-A&usqp=CAU',
        'https://images.indianexpress.com/2016/09/ginger-cat_1500_thinkstockphotos-464527129.jpg?w=389',
        'https://i.pinimg.com/originals/cd/e2/1e/cde21e4c95211a3ca442a6be583cf269.jpg',
      ],
    },
    {
      id: 15,
      petName: 'kanil',
      age: '2',
      type: 'Small',
      gender: 'Female',
      category: 'Cat',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Pinpari, pune',
      breed: 'Siamese',
      distance: '9 km',
      ownDetails: {
        ownName: 'Vishal ',
        ownNgoname: 'Animal Rescure Trust',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/08/08/2528443-bengal.png',
        'https://media-be.chewy.com/wp-content/uploads/2019/07/24115655/spotted-cat-breed-bengal-1024x576.jpg',
        'https://excitedcats.com/wp-content/uploads/2020/09/Spotted-Cat.jpg',
        'https://cdn.shopify.com/s/files/1/0079/6708/0512/files/16d0b978ece1b14e3f25b88ad959e5da_large.jpg?v=1548236306',
        'https://excitedcats.com/wp-content/uploads/2020/09/Spotted-Cat.jpg',
      ],
    },
    {
      id: 16,
      petName: 'Abby',
      age: '2.1',
      type: 'Medium',
      gender: 'Female',
      category: 'Cat',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Akurdi,pune',
      breed: 'Himalayan',
      distance: '7 km',
      ownDetails: {
        ownName: 'Vinod',
        ownNgoname: 'SAahas for Animals',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://images.unsplash.com/photo-1507095952186-018dfd27c43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      ],
    },
    {
      id: 17,
      petName: 'Jagper',
      age: '4',
      type: 'older',
      gender: 'Male',
      category: 'Cat',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Punavle,pune',
      breed: 'Persian',
      distance: '5 km',
      ownDetails: {
        ownName: 'Rushi',
        ownNgoname: 'Vrundavan ',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://images.unsplash.com/photo-1623620976858-efdb0bc79120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
      ],
    },
    {
      id: 18,
      petName: 'Zeus',
      age: '2',
      type: 'Small',
      gender: 'Male',
      category: 'Cat',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'sus,pune',
      breed: 'Persian',
      distance: '6 km',
      ownDetails: {
        ownName: 'Vishal ',
        ownNgoname: 'Animal Rescure Trust',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://as2.ftcdn.net/v2/jpg/03/66/46/49/1000_F_366464914_I0ZbbMDlNEUfqocAi5yXAUSDxPtNeVam.jpg',
      ],
    },
    {
      id: 19,
      petName: 'Juno',
      age: '4',
      type: 'Medium',
      gender: 'Female',
      category: 'Cat',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Kharadi,pune',
      breed: 'Himalayan',
      distance: '9 km',
      ownDetails: {
        ownName: 'Vinod',
        ownNgoname: 'SAahas for Animals',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://as2.ftcdn.net/v2/jpg/03/30/42/69/1000_F_330426922_fMbQBZ1yZtRjeKY6RNxxSfy5iSNgnjII.jpg',
      ],
    },
    {
      id: 20,
      petName: 'Molly',
      age: '0.2',
      type: 'Small',
      gender: 'Female',
      category: 'Cat',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'Bombay',
      distance: '10 km',
      ownDetails: {
        ownName: 'Rushi',
        ownNgoname: 'Vrundavan ',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://thumbs.dreamstime.com/b/cat-cute-brown-front-view-search-food-indian-color-looks-like-searching-mouse-169261299.jpg',
      ],
    },
    {
      id: 21,
      petName: 'Ash',
      age: '1.3',
      type: 'Small',
      gender: 'Female',
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'heifer',
      distance: '2 km',
      ownDetails: {
        ownName: 'Vishal',
        ownNgoname: 'Jeevraksha Animal',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://images.unsplash.com/photo-1599307848808-fb36c798ee87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwY293fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        'https://qph.cf2.quoracdn.net/main-qimg-7ee01f538c39aef698bc7756995bdb45-lq',
        'https://previews.123rf.com/images/kuroi/kuroi1311/kuroi131100026/24059028-calf-of-an-indian-cow-two-weeks-old-haridvar-india-.jpg',
        'https://thumbs.dreamstime.com/b/indian-cow-calf-cattle-farm-look-camera-171692491.jpg',
        'https://thumbs.dreamstime.com/b/little-baby-cow-natural-photos-beautiful-view-calf-farm-171693369.jpg',
      ],
    },
    {
      id: 22,
      petName: 'Moni',
      age: '3',
      type: 'Medium',
      gender: 'Female',
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: '',
      breed: 'heifer',
      distance: '5 km',
      ownDetails: {
        ownName: 'Rushikesh',
        ownNgoname: 'Goshala',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://i.pinimg.com/originals/bf/cc/40/bfcc408f63b05613b19a7ea40879f465.jpg',
      ],
    },
    {
      id: 23,
      petName: 'Tikki',
      age: '1.2',
      type: 'Small',
      gender: 'Female',
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: '',
      breed: 'heifer',
      distance: '7 km',
      ownDetails: {
        ownName: 'Vishal',
        ownNgoname: 'Jeevraksha Animal',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Holstein_Friesian_UK_Yorkshire_July_2011.jpg/1200px-Holstein_Friesian_UK_Yorkshire_July_2011.jpg',
      ],
    },
    {
      id: 24,
      petName: 'Soni',
      age: '4.5',
      type: 'Older',
      gender: 'Female',
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'heifer',
      distance: ' 5 km',
      ownDetails: {
        ownName: 'Dyan',
        ownNgoname: 'Goshala seva',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlHqgo-CF9eOvf3rocW2bBt_ZGwOhiJBsWv9ciBtH-v-Z-MBGZjcyu9SXjFRl01JFrPY&usqp=CAU',
      ],
    },
    {
      id: 25,
      petName: 'Sunny',
      age: '0.5',
      type: 'Small',
      gender: 'Female',
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Sihagad ,pune',
      breed: 'heifer',
      distance: '2 km',
      ownDetails: {
        ownName: 'Rushikesh',
        ownNgoname: 'Goshala',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://i.insider.com/5f96ec874743a3001216b9bc?width=809&format=jpeg',
      ],
    },
    {
      id: 26,
      petName: 'Pari',
      age: '5',
      type: 'Older',
      gender: 'Female',
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: '',
      breed: 'heifer',
      distance: '10 km',
      ownDetails: {
        ownName: 'Vishal',
        ownNgoname: 'Jeevraksha Animal',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegMkWkN6NmlJtXqyXWtvxf-EuwZqAF9sU_F7qn-YNiCbsepk1xEvXtIeodzgIDve3F_U&usqp=CAU',
      ],
    },
    {
      id: 27,
      petName: 'Moni',
      age: '2',
      type: 'Small',
      gender: 'Female',
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: '',
      breed: 'heifer',
      distance: '4 km',
      ownDetails: {
        ownName: 'Rushikesh',
        ownNgoname: 'Goshala',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://thehill.com/wp-content/uploads/sites/2/2021/08/ca_cow_stock.jpg',
      ],
    },
    {
      id: 28,
      petName: 'Rani',
      age: '3',
      type: 'Medium',
      gender: 'Female',
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'heifer',
      distance: '5 km',
      ownDetails: {
        ownName: 'Vishal',
        ownNgoname: 'Jeevraksha Animal',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk27yfkzlnIxxjoybSblR60e4Dr43KwJ8GUJqr2kt23DfgyB9xg-OeGmVt88nl9jGyQ3M&usqp=CAU',
      ],
    },
    {
      id: 29,
      petName: 'Anna',
      age: '1.5',
      type: 'Small',
      gender: 'Female',
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Sihagad ,pune',
      breed: 'heifer',
      distance: '2 km',
      ownDetails: {
        ownName: 'Dyan',
        ownNgoname: 'Goshala seva',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl: [
        'https://cpimg.tistatic.com/02915893/b/5/Black-White-Hf-Cow.jpg?tr=n-w300',
      ],
    },
    {
      id: 30,
      petName: 'Molly',
      age: '4',
      type: 'Medium',
      gender: 'Female',
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'heifer',
      distance: '5 km',
      ownDetails: {
        ownName: 'Rushikesh',
        ownNgoname: 'Goshala',
        ownImg: 'https://www.w3schools.com/howto/img_avatar.png',
        ownNum: '6585258875',
      },
      petUrl: ['https://cpimg.tistatic.com/05783742/b/4/Farm-HF-Cow-w300.jpg'],
    },
  ];


  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal:moderateScale(20),marginTop:15,marginBottom:moderateScale(10)}}>
        <Text style={{fontSize:20,fontFamily: 'Montserrat-Bold',color:Colors.hed}}>Dog Screen</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.petsSection}>
      {NewPets.filter((item) =>item.category == "Dog" ).map((item, ind) => (
        <PetsCard 
         petUrl={item?.petUrl}
        petName={item?.petName}
        petAge={item?.age}
        gender={item?.gender}
        distance={item?.distance}
        ownDetails={item?.ownDetails}
        about={item?.about}
        breed={item?.breed}
        address={item?.address}
        ind={ind}
        item={item}
        />
        ))}
    </View>
      </ScrollView>
    </View>
  )
}

export default CatScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bg
    },
    petsSection:{
        marginHorizontal:moderateScale(15),
        flexDirection:'row',
        justifyContent:"space-between",
    flexWrap: 'wrap',
      
    }
})