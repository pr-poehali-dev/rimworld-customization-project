import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCreature, setSelectedCreature] = useState<number | null>(null);
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const creatures = [
    {
      id: 1,
      name: 'Железный Страж',
      type: 'Механоид',
      image: 'https://cdn.poehali.dev/projects/c8a86cee-3de8-46d5-8934-c65e2b46433e/files/f42382f2-7b45-4a31-8875-ffd3c98fd42d.jpg',
      health: 150,
      damage: 25,
      speed: 8,
      skills: ['Энергощит', 'Лазерный залп', 'Сканирование'],
      description: 'Автономный боевой робот с продвинутым ИИ. Эффективен в обороне и разведке территорий.',
      taming: 'Невозможно',
      evolution: 'Может быть модифицирован через технологии'
    },
    {
      id: 2,
      name: 'Теневой Хищник',
      type: 'Мутант',
      image: 'https://cdn.poehali.dev/projects/c8a86cee-3de8-46d5-8934-c65e2b46433e/files/61340808-6e31-4b22-bf75-84af57ce3105.jpg',
      health: 120,
      damage: 35,
      speed: 12,
      skills: ['Ночное зрение', 'Бесшумный бег', 'Регенерация'],
      description: 'Быстрый и смертоносный хищник, обитающий в тёмных лесах. Охотится стаями.',
      taming: 'Сложно — требует специального корма',
      evolution: 'Развивает иммунитет к токсинам в загрязнённых биомах'
    },
    {
      id: 3,
      name: 'Кристальный Титан',
      type: 'Древний',
      image: '/placeholder.svg',
      health: 300,
      damage: 15,
      speed: 4,
      skills: ['Каменная кожа', 'Землетрясение', 'Кристальная броня'],
      description: 'Массивное существо из горных пещер. Медленное, но невероятно стойкое.',
      taming: 'Возможно при высокой харизме',
      evolution: 'Адаптируется к температурам, меняя структуру кристаллов'
    }
  ];

  const storytellers = [
    {
      id: 1,
      name: 'Хаос',
      difficulty: 'Экстремальная',
      icon: 'Flame',
      color: 'text-accent',
      description: 'Безжалостный рассказчик, создающий катастрофы одну за другой',
      events: ['Метеоритный дождь', 'Эпидемия', 'Нападение враждебных фракций', 'Неисправность энергосистем'],
      style: 'Непрерывный экшен и выживание на грани'
    },
    {
      id: 2,
      name: 'Баланс',
      difficulty: 'Средняя',
      icon: 'Scale',
      color: 'text-primary',
      description: 'Создаёт ритм из спокойных периодов и интенсивных событий',
      events: ['Торговые караваны', 'Небольшие рейды', 'Сезонные изменения', 'Случайные встречи'],
      style: 'Динамичная история с передышками'
    },
    {
      id: 3,
      name: 'Строитель',
      difficulty: 'Лёгкая',
      icon: 'Hammer',
      color: 'text-secondary',
      description: 'Позволяет спокойно развиваться и строить базу',
      events: ['Прибытие колонистов', 'Богатые ресурсы', 'Дружественные фракции', 'Археологические находки'],
      style: 'Фокус на строительстве и развитии колонии'
    }
  ];

  const biomes = [
    {
      name: 'Тёмный Лес',
      icon: 'Trees',
      temperature: '-5°C до +15°C',
      resources: ['Древесина', 'Грибы', 'Травы'],
      creatures: ['Теневой Хищник', 'Светлячковые Рои'],
      dangers: 'Низкая видимость, хищники'
    },
    {
      name: 'Кристальные Пещеры',
      icon: 'Mountain',
      temperature: '+10°C до +20°C',
      resources: ['Кристаллы', 'Руда', 'Драгоценные камни'],
      creatures: ['Кристальный Титан', 'Светящиеся Летучие мыши'],
      dangers: 'Обвалы, острые кристаллы'
    },
    {
      name: 'Радиационная Пустошь',
      icon: 'Radiation',
      temperature: '+25°C до +40°C',
      resources: ['Металлолом', 'Радиоактивные минералы', 'Старые технологии'],
      creatures: ['Железный Страж', 'Мутировавшие Насекомые'],
      dangers: 'Высокая радиация, механоиды'
    },
    {
      name: 'Ледяная Тундра',
      icon: 'Snowflake',
      temperature: '-30°C до -10°C',
      resources: ['Лёд', 'Замороженная рыба', 'Криокристаллы'],
      creatures: ['Ледяной Медведь', 'Снежные Призраки'],
      dangers: 'Переохлаждение, метели'
    }
  ];

  const mechanics = [
    {
      name: 'Крафтинг (Мини-игра)',
      icon: 'Wrench',
      description: 'Создавай предметы через интерактивную мини-игру',
      features: [
        'Подбирай правильные компоненты',
        'Соблюдай последовательность сборки',
        'Качество зависит от твоего мастерства',
        'Разблокируй новые рецепты через опыт'
      ]
    },
    {
      name: 'Продвинутое Растениеводство',
      icon: 'Sprout',
      description: 'Управляй полным циклом выращивания растений',
      features: [
        'Система селекции — скрещивай сорта',
        'Контроль pH почвы и удобрений',
        'Борьба с вредителями и болезнями',
        'Сезонные культуры и теплицы',
        'Генетические мутации растений'
      ]
    },
    {
      name: 'Животноводство',
      icon: 'Beef',
      description: 'Приручай, разводи и эволюционируй существ',
      features: [
        'Система приручения через доверие',
        'Разведение с передачей генов',
        'Дрессировка и обучение команд',
        'Мутации и адаптация к биомам',
        'Симбиоз с колонистами'
      ]
    },
    {
      name: 'Эволюция Существ',
      icon: 'Dna',
      description: 'Существа адаптируются к окружающей среде',
      features: [
        'Реальное время эволюции популяций',
        'Изменение характеристик под биом',
        'Появление новых подвидов',
        'Конкуренция между видами',
        'Вымирание слабых популяций'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ЭДЕН: НОВЫЙ МИР
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Стратегия выживания и развития колонии в мире, где каждое существо эволюционирует, 
            каждый выбор имеет последствия, и рассказчики плетут твою уникальную историю
          </p>
        </div>

        <Tabs defaultValue="world" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="world" className="flex gap-2">
              <Icon name="Globe" size={18} />
              МИР
            </TabsTrigger>
            <TabsTrigger value="creatures" className="flex gap-2">
              <Icon name="Bug" size={18} />
              СУЩЕСТВА
            </TabsTrigger>
            <TabsTrigger value="gameplay" className="flex gap-2">
              <Icon name="Gamepad2" size={18} />
              ГЕЙМПЛЕЙ
            </TabsTrigger>
            <TabsTrigger value="storytellers" className="flex gap-2">
              <Icon name="BookOpen" size={18} />
              РАССКАЗЧИКИ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="world" className="space-y-6 animate-fade-in">
            <Card className="border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-2">
                  <Icon name="Map" className="text-primary" />
                  Биомы Планеты Эден
                </CardTitle>
                <CardDescription>
                  Четыре уникальных экосистемы с собственной флорой, фауной и опасностями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {biomes.map((biome, index) => (
                    <Card key={index} className="bg-card/50 hover:bg-card/80 transition-all hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                          <Icon name={biome.icon as any} className="text-primary" size={24} />
                          {biome.name}
                        </CardTitle>
                        <Badge variant="outline" className="w-fit">{biome.temperature}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-1">Ресурсы:</p>
                          <div className="flex flex-wrap gap-1">
                            {biome.resources.map((resource, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {resource}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-1">Обитатели:</p>
                          <p className="text-sm">{biome.creatures.join(', ')}</p>
                        </div>
                        <div className="flex items-start gap-2 pt-2 border-t border-border">
                          <Icon name="AlertTriangle" className="text-accent mt-0.5" size={16} />
                          <p className="text-sm text-accent">{biome.dangers}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-secondary" />
                  Живая Экосистема
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Мир Эдена — не статичная карта, а динамичная экосистема. Популяции животных растут и 
                  сокращаются, растения конкурируют за ресурсы, а хищники охотятся на добычу.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Leaf" className="text-green-400" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Флора</p>
                      <Progress value={75} className="h-2 mt-1" />
                    </div>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Footprints" className="text-orange-400" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Травоядные</p>
                      <Progress value={60} className="h-2 mt-1" />
                    </div>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="BadgeAlert" className="text-red-400" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Хищники</p>
                      <Progress value={40} className="h-2 mt-1" />
                    </div>
                    <span className="text-sm text-muted-foreground">40%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="creatures" className="space-y-6 animate-fade-in">
            <div className="grid lg:grid-cols-3 gap-4">
              {creatures.map((creature) => (
                <Card
                  key={creature.id}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedCreature === creature.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedCreature(creature.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-slate-800">
                      <img
                        src={creature.image}
                        alt={creature.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-xl">{creature.name}</CardTitle>
                    <Badge variant="outline" className="w-fit">{creature.type}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Здоровье:</span>
                        <span className="font-semibold text-primary">{creature.health}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Урон:</span>
                        <span className="font-semibold text-accent">{creature.damage}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Скорость:</span>
                        <span className="font-semibold text-secondary">{creature.speed}</span>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Способности:</p>
                      <div className="flex flex-wrap gap-1">
                        {creature.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedCreature && (
              <Card className="border-primary/30 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Подробности: {creatures.find(c => c.id === selectedCreature)?.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {creatures.find(c => c.id === selectedCreature)?.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon name="Heart" className="text-secondary" size={18} />
                        <p className="font-semibold">Приручение:</p>
                      </div>
                      <p className="text-sm text-muted-foreground pl-7">
                        {creatures.find(c => c.id === selectedCreature)?.taming}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon name="Dna" className="text-primary" size={18} />
                        <p className="font-semibold">Эволюция:</p>
                      </div>
                      <p className="text-sm text-muted-foreground pl-7">
                        {creatures.find(c => c.id === selectedCreature)?.evolution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="gameplay" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {mechanics.map((mechanic, index) => (
                <Card key={index} className="hover:border-primary/40 transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Icon name={mechanic.icon as any} className="text-primary" size={24} />
                      </div>
                      {mechanic.name}
                    </CardTitle>
                    <CardDescription>{mechanic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-40">
                      <ul className="space-y-2">
                        {mechanic.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Icon name="CheckCircle2" className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Zap" className="text-accent" />
                  Пример: Крафтинг Винтовки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {['Металлические части', 'Деревянное ложе', 'Оптика'].map((component, i) => (
                      <div key={i} className="p-4 bg-card/50 rounded-lg border border-border text-center">
                        <Icon name="Package" className="mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm">{component}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="ArrowDown" className="text-primary" size={32} />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/30 text-center">
                    <Icon name="Target" className="mx-auto mb-3 text-primary" size={48} />
                    <p className="font-bold text-lg">Снайперская Винтовка</p>
                    <Badge variant="secondary" className="mt-2">Качество: Отличное</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Успешно собранный предмет получает бонус к характеристикам в зависимости от твоего мастерства
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="storytellers" className="space-y-6 animate-fade-in">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-2">
                  <Icon name="Scroll" className="text-primary" />
                  Выбери Рассказчика
                </CardTitle>
                <CardDescription className="text-base">
                  Рассказчики управляют событиями в игре, создавая уникальные истории. Каждый имеет свой стиль 
                  и подход к генерации событий.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {storytellers.map((storyteller) => (
                <Card
                  key={storyteller.id}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedStory === storyteller.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedStory(storyteller.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <div className={`p-6 rounded-full bg-gradient-to-br ${
                        storyteller.id === 1 ? 'from-accent/20 to-accent/5' :
                        storyteller.id === 2 ? 'from-primary/20 to-primary/5' :
                        'from-secondary/20 to-secondary/5'
                      }`}>
                        <Icon name={storyteller.icon as any} className={storyteller.color} size={48} />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-center">{storyteller.name}</CardTitle>
                    <Badge
                      variant={storyteller.difficulty === 'Экстремальная' ? 'destructive' : 
                              storyteller.difficulty === 'Средняя' ? 'default' : 'secondary'}
                      className="w-fit mx-auto"
                    >
                      {storyteller.difficulty}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-center text-muted-foreground">
                      {storyteller.description}
                    </p>
                    <Separator />
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2 text-center">
                        Типичные события:
                      </p>
                      <div className="space-y-1">
                        {storyteller.events.map((event, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Icon name="Sparkles" size={14} className={storyteller.color} />
                            <span>{event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <p className="text-xs text-muted-foreground italic text-center">
                      {storyteller.style}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedStory && (
              <Card className="border-secondary/30 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Игра с рассказчиком: {storytellers.find(s => s.id === selectedStory)?.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3 mb-4">
                      <Icon name="MessageSquare" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="font-semibold mb-2">Пример события:</p>
                        <p className="text-sm text-muted-foreground">
                          {selectedStory === 1 && "День 15: Внезапно на горизонте появляется метеоритный рой! У вас есть 2 минуты, чтобы укрыть колонистов и ценное оборудование. Один из метеоритов содержит редкий минерал..."}
                          {selectedStory === 2 && "День 8: Прибыл торговый караван с редкими товарами. В это же время разведка обнаружила вражеский лагерь в 2 километрах. Что важнее: торговля или безопасность?"}
                          {selectedStory === 3 && "День 20: Ваша колония процветает! Прибыли три новых колониста с уникальными навыками. Археолог нашёл древний артефакт, который может улучшить технологии."}
                        </p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Icon name="Play" className="mr-2" size={18} />
                      Начать Игру
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-4 bg-card/50 rounded-lg">
                      <Icon name="Swords" className="mx-auto mb-2 text-accent" size={24} />
                      <p className="text-2xl font-bold">8/10</p>
                      <p className="text-xs text-muted-foreground">Интенсивность</p>
                    </div>
                    <div className="p-4 bg-card/50 rounded-lg">
                      <Icon name="Users" className="mx-auto mb-2 text-primary" size={24} />
                      <p className="text-2xl font-bold">6/10</p>
                      <p className="text-xs text-muted-foreground">Развитие</p>
                    </div>
                    <div className="p-4 bg-card/50 rounded-lg">
                      <Icon name="Drama" className="mx-auto mb-2 text-secondary" size={24} />
                      <p className="text-2xl font-bold">9/10</p>
                      <p className="text-xs text-muted-foreground">Драматизм</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
