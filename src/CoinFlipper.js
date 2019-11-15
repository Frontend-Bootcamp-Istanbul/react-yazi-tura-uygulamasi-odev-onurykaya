import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props){
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
        side: "tura",
        donuyor: false,
        tura: 0,
        yazi: 0,
        toplamDonme: 0
    }
  }
  handleClick = () => {
    const fiftyFifty = Math.random() < 0.5;
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    //Toplam dönme olarak tanımladığımız state de dönmeyle birlikte +1 arttırırız.
    this.setState({ donuyor: true, toplamDonme: this.state.toplamDonme + 1});
    //Eğer fiftyfifty fonk. 0.5'den küçük gelirse turayı 1 arttırır ve tura gözükür gelmezse yazıyı 1 arttırır ve yazı gözükür.
    setTimeout(() =>  fiftyFifty ? this.setState({ side: "tura", tura: this.state.tura + 1 }) : this.setState({ side: "yazi", yazi: this.state.yazi + 1 }),1000)
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({donuyor: false}), 1000);

  };

 yenidenBasla = ()=>{
    this.setState({toplamDonme : 0, yazi : 0, tura: 0})
 };

  

  render(){
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        {this.state.donuyor === false ? <button onClick={this.handleClick}>At!</button> : <button disabled onClick={this.handleClick} >Dönüyor...</button>}<br />
        <button onClick={this.yenidenBasla}>Yeniden Başla</button>
        <p>
            Toplam
            <strong> {this.state.toplamDonme} </strong>
            atıştan
            <strong> {this.state.tura} </strong>
            ü tura
            <strong> {this.state.yazi} </strong>
            si yazı geldi.</p>
      </div>
    )
  }
}

export default CoinFlipper;