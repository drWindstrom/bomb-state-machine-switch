<script lang="ts">
    import { Button } from "#lib/components/ui/button/index.js";
    import * as ButtonGroup from "#lib/components/ui/button-group/index.js";
    import { ScrollArea } from "#lib/components/ui/scroll-area/index.js";
    import { Separator } from "#lib/components/ui/separator/index.js";
    import * as Card from "#lib/components/ui/card/index.js";
</script>

<h1 class="mb-24 text-4xl font-bold text-center">FSM Switch implementation</h1>

<ButtonGroup.Root
  orientation="vertical"
  aria-label="FSM events">
  <Button>UP</Button>
  <Button>DOWN</Button>
  <Button>ARM</Button>
</ButtonGroup.Root>

<div>
    <div class="p-4 m-2 rounded-lg  text-center">SETTING</div>
    <div class="p-4 m-2 rounded-lg bg-cyan-500 text-center">TIMING</div>
</div>


<h3 class="text-lg font-semibold">Event History</h3>  
<ScrollArea class="h-72 w-96 rounded-md border">
  <div class="p-4">
    
    
      <div class="text-sm">
        Event 1: UP
      </div>
      <Separator class="my-2" />
      <div class="text-sm">
        Event 2: DOWN
      </div>
      <Separator class="my-2" />
      <div class="text-sm">
        Event 3: ARM
      </div>
      <Separator class="my-2" />
<div class="text-sm">
        Event 3: ARM
      </div>
      <Separator class="my-2" /><div class="text-sm">
        Event 3: ARM
      </div>
      <Separator class="my-2" /><div class="text-sm">
        Event 3: ARM
      </div>
      <Separator class="my-2" /><div class="text-sm">
        Event 3: ARM
      </div>
      <Separator class="my-2" /><div class="text-sm">
        Event 3: ARM
      </div>
      <Separator class="my-2" /><div class="text-sm">
        Event 3: ARM
      </div>
      <Separator class="my-2" /><div class="text-sm">
        Event 3: ARMdfgdfg fdgdsg df gdf gfd gdf gds fg dsf gdf gd fdf g
      </div>
      <Separator class="my-2" />
    
  </div>
</ScrollArea>

<Card.Root class="m-4">
  <Card.Header>
    <Card.Title>Timeout</Card.Title>
    
  </Card.Header>
  <Card.Content>
    <p>60 s</p>
  </Card.Content>
  
</Card.Root>
