import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SwordSelect extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div className='selectField'>
        <p className='selectLabel'>Weapon:</p> 
        <select className='select' value={this.props.value} onChange={this.props.handleChange}>
          <option value="hand">No weapon</option>
          <option value="wood_sw">Wooden Sword</option>
          <option value="wood_axe">Wooden Axe</option>
          <option value="stone_sw">Stone Sword</option>
          <option value="stone_axe">Stone Axe</option>
          <option value="iron_sw">Iron Sword</option>
          <option value="iron_axe">Iron Axe</option>
          <option value="gold_sw">Golden Sword</option>
          <option value="gold_axe">Golden Axe</option>
          <option value="diamond_sw">Diamond Sword</option>
          <option value="diamond_axe">Diamond Axe</option>
          <option value="neth_sw">Netherite Sword</option>
          <option value="neth_axe">Netherite Axe</option>
        </select>
    </div>
    );
  }
}

class EnchantSelect extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div className='selectField'>
        <p className='selectLabel'>Sharpness level:</p> 
        <select className='select'value={this.props.value} onChange={this.props.handleChange}>
          <option value="blank">No Sharpness</option>
          <option value="ShI">Sharpness I</option>
          <option value="ShII">Sharpness II</option>
          <option value="ShIII">Sharpness III</option>
          <option value="ShIV">Sharpness IV</option>
          <option value="ShV">Sharpness V</option>
        </select>
    </div>
    );
  }
}

class EffectSelect extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div className='selectField'>
        <p className='selectLabel'>Strength level:</p> 
        <select className='select' value={this.props.value} onChange={this.props.handleChange}>
          <option value="blank">No Strength</option>
          <option value="StI">Strength</option>
          <option value="StII">Strength II</option>
        </select>
    </div>
    );
  }
}

class ArmorSelect extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div className='selectField'>
        <p className='selectLabel'>Armor:</p> 
        <select className='select' value={this.props.value} onChange={this.props.handleChange}>
          <option value="blank">No armor</option>
          <option value="wood">Leather Armor</option>
          <option value="chain">Chainmail Armor</option>
          <option value="iron">Iron Armor</option>
          <option value="gold">Golden Armor</option>
          <option value="diamond">Diamond Armor</option>
          <option value="neth">Netherite Armor</option>
        </select>
    </div>
    );
  }
}

class ProtSelect extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div className='selectField'>
        <p className='selectLabel'>Protection level:</p> 
        <select className='select' value={this.props.value} onChange={this.props.handleChange}>
          <option value="blank">No Protection</option>
          <option value="PI">Protection I</option>
          <option value="PII">Protection II</option>
          <option value="PIII">Protection III</option>
          <option value="PIV">Protection IV</option>
        </select>
    </div>
    );
  }
}

class App extends React.Component {
  
constructor(props){
  super(props);
  this.state = {
    sword_value: 'diamond_sw',
    enchant_value: 'blank',
    effect_value: 'blank',
    armor_value: 'blank',
    prot_value: 'blank',
  };
    this.handleSwordValChange = this.handleSwordValChange.bind(this);
    this.handleEnchantValChange = this.handleEnchantValChange.bind(this);
    this.handleEffectValChange = this.handleEffectValChange.bind(this);
    this.handleArmorValChange = this.handleArmorValChange.bind(this);
    this.handleProtValChange = this.handleProtValChange.bind(this);
    this.convert = this.convert.bind(this);
    this.calcArmor = this.calcArmor.bind(this);
    this.convToughness = this.convToughness.bind(this);
  }

  componentDidMount(){
    document.title="Minecraft Damage Calculator"
  }
  handleSwordValChange(event){
    this.setState({sword_value: event.target.value});
  }

  handleEnchantValChange(event){
    this.setState({enchant_value: event.target.value});
  }

  handleEffectValChange(event){
    this.setState({effect_value: event.target.value});
  }

  handleArmorValChange(event){
    this.setState({armor_value: event.target.value});
  }

  handleProtValChange(event){
    this.setState({prot_value: event.target.value});
  }

  convert(thing){
    switch(thing){
      case 'wood':
        return 7;
      case 'chain':
        return 12;
      case 'iron':
        return 15;
      case 'gold':
        return 11;
      case 'diamond':
        return 20;
      case 'neth':
        return 20;
      case 'wood_sw':
        return 4;
      case 'wood_axe':
        return 7;
      case 'stone_sw':
        return 5;
      case 'stone_axe':
        return 9;
      case 'iron_sw':
        return 6;
      case 'iron_axe':
        return 9;
      case 'gold_sw':
        return 4;
      case 'gold_axe':
        return 7;
      case 'diamond_sw':
        return 7;
      case 'diamond_axe':
        return 9;
      case 'neth_sw':
        return 8;
      case 'neth_axe':
        return 10;
      case 'ShI':
        return 1;
      case 'ShII':
        return 1.5;
      case 'ShIII':
        return 2;
      case 'ShIV':
        return 2.5;
      case 'ShV':
        return 3;
      case 'PI':
        return 4;
      case 'PII':
        return 8;
      case 'PIII':
         return 12;
      case 'PIV':
         return 16;
      case 'StI':
        return 3;
      case 'StII':
        return 6;
      case 'blank':
        return 0;
      case 'hand':
        return 1;
      default:
        return 0;
    }
  }

  plusDecide (val){
    if(val !== 'blank')
    return '+';
    else return '';
  }

  calcArmor (damage, defPoints, toughness, prot){
    if(defPoints !== 0)
    return ((damage * (1-Math.min(20, Math.max(defPoints/5, defPoints-(4*damage/(toughness+8)))/25))) * 1-(prot/25))
    else return damage
  }

  convToughness (armor) {
    switch(armor){
      case 'diamond':
        return 8;
      case 'neth':
        return 12;
      default:
        return 0;
    }
  }

  render(){
    let prot;
    let sharpness;

    if (this.state.armor_value !== 'blank'){
      prot = <ProtSelect value={this.state.prot_value} handleChange={this.handleProtValChange}/>
    }
    else prot = null

    if (this.state.sword_value !== 'hand'){
      sharpness = <EnchantSelect value={this.state.enchant_value_value} handleChange={this.handleEnchantValChange}/>
    }
    else sharpness = null
    

    return(
    <div>
      <div className='header'><h1>Minecraft damage calculator</h1></div>
      <div className='contentDiv'>
        <form>
        <div className='block'>
          <div className='optionsToSelect'>
            <SwordSelect value={this.state.sword_value} handleChange={this.handleSwordValChange}/>
            {sharpness}
            <EffectSelect value={this.state.effect_value} handleChange={this.handleEffectValChange}/>
          </div>
          <div className='armorToSelect'>
            <ArmorSelect value={this.state.armor_value} handleChange={this.handleArmorValChange}/>
            {prot}
          </div>
        </div>
        <div className='tabelkaContainer'>
          <table className='tabelka'>
            <thead>
              <tr>
                <td></td><td>Normal</td><td>Critical</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base damage</td><td>{this.convert(this.state.sword_value)}</td><td>{this.convert(this.state.sword_value)*1.5}</td>
              </tr>
              <tr>
                <td>Enchant addtional damage</td><td>{this.plusDecide(this.state.enchant_value) + this.convert(this.state.enchant_value)}</td><td>{this.plusDecide(this.state.enchant_value) + this.convert(this.state.enchant_value)}</td>
              </tr>
              <tr>
                <td>Strength addtional damage</td><td>{this.plusDecide(this.state.effect_value) + this.convert(this.state.effect_value)}</td><td>{this.plusDecide(this.state.effect_value) + this.convert(this.state.effect_value)*1.5}</td>
              </tr>
              <tr>
                <td>Final damage</td><td>{this.convert(this.state.sword_value) + this.convert(this.state.enchant_value) + this.convert(this.state.effect_value)}</td><td>{this.convert(this.state.sword_value)*1.5 + this.convert(this.state.enchant_value) + this.convert(this.state.effect_value)*1.5}</td>
              </tr>
              <tr>
                <td>Final damage with armor</td><td>{Math.round(this.calcArmor(this.convert(this.state.sword_value) + this.convert(this.state.enchant_value) + this.convert(this.state.effect_value), this.convert(this.state.armor_value), this.convToughness(this.state.armor_value), this.convert(this.state.prot_value))*100 )/100}</td><td>{Math.round(this.calcArmor(this.convert(this.state.sword_value)*1.5 + this.convert(this.state.enchant_value) + this.convert(this.state.effect_value)*1.5, this.convert(this.state.armor_value), this.convToughness(this.state.armor_value), this.convert(this.state.prot_value))*100 )/100}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
      </div>
      <div id='footer'><i><p id='footerText'>made by Pierogov</p>
      <a id="att" href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a></i></div>
    </div>
    );
  }
}

//(this.convert(this.state.sword_value)*1.5 + this.convert(this.state.enchant_value) + this.convert(this.state.effect_value)*1.5) * (1-)
//<p>Obrażenia broni: {this.convert(this.state.sword_value)}</p>
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
